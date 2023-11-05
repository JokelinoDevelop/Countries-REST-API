<template>
  <div class="bg-light-background dark:bg-dark-background px-8 py-8 h-full lg:py-12 lg:px-24">
    <router-link :to="{ path: '/' }">
      <button
        class="shadow-lg bg-white py-2 px-7 mb-12 rounded-md dark:bg-dark-element dark:text-white transition-all duration-300">
        <i class="fa-solid fa-arrow-left pr-3"></i>Back
      </button>
    </router-link>

    <div v-if="store.selectedCountry" class="dark:text-white py-8 lg:grid lg:grid-cols-6 lg:items-center lg:gap-12 v">
      <div class="col-start-1 col-end-4">
        <img :src="store.selectedCountry.flags.png" alt=""
          class="w-full h-[15rem] md:h-[20rem] lg:h-[30rem] object-cover" />
      </div>

      <div class="col-start-4 col-end-7">
        <h1 class="font-[800] text-xl my-4">{{ store.selectedCountry.name.common }}</h1>

        <div class="lg:flex lg:gap-14">
          <div class="flex flex-col gap-2 mt-4">
            <p><span class="font-[600]">Native Name:</span> {{
              Object.values(store.selectedCountry.name.nativeName)[0].official }}
            </p>
            <p><span class="font-[600]">Population:</span> {{ store.selectedCountry.population }}</p>
            <p><span class="font-[600]">Region:</span> {{ store.selectedCountry.region }}</p>
            <p><span class="font-[600]">Sub Region:</span> {{ store.selectedCountry.subregion }}</p>
            <p><span class="font-[600]">Capital:</span> {{ store.selectedCountry.capital[0] }}</p>
          </div>

          <div>
            <div class="flex flex-row gap-2 mt-10 lg:mt-4">
              <p><span class="font-[600]">Top Level Domain:</span></p>
              <template v-for="(domain, index) in store.selectedCountry.tld" :key="index">
                <p>{{ domain }}</p>
                <span v-show="index != store.selectedCountry.tld.length - 1">,</span>
              </template>
            </div>

            <div class="flex flex-row gap-2">
              <p><span class="font-[600]">Currencies:</span></p>
              <template v-for="(currency, index) in Object.values(store.selectedCountry.currencies)" :key="index">
                <p>{{ currency.name }}</p>
                <span v-show="index != Object.values(store.selectedCountry.currencies) - 1">,</span>
              </template>
            </div>

            <div class="flex flex-row gap-2">
              <p><span class="font-[600]">Languages:</span></p>
              <template v-for="(language, index) in Object.values(store.selectedCountry.languages)" :key="index">
                <p>
                  {{ language
                  }}<span v-show="index != Object.values(store.selectedCountry.languages).length - 1">,</span>
                </p>
              </template>
            </div>
          </div>


        </div>


        <div class="lg:grid lg:grid-cols-4 lg:mt-8">
          <p class="mt-4 lg:col-start-1 lg:col-end-2"><span class="font-[600] text-lg">Border Countries:</span></p>
          <ul class="flex flex-row flex-wrap gap-3 mt-4 lg:col-start-2 lg:col-end-5">
            <li class="shadow-lg bg-white dark:bg-dark-element py-1 px-5 transition-all duration-300"
              v-for="(border, index) in store.selectedCountry.borders" :key="index">
              <router-link :to="{ params: { alpha3Code: getBorderCountryDetails(border).cca3 }, name: 'CountryView' }">{{
                getBorderCountryDetails(border).name.common }}</router-link>
            </li>
          </ul>
        </div>

      </div>



    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { onBeforeMount, onBeforeUpdate } from "vue";
import { useRoute } from "vue-router";

const store = useCountryStore()
const route = useRoute()

onBeforeMount(async () => {
  await store.fetchCountries()
  store.selectCountryByRoute(route.params.alpha3Code)
})

onBeforeUpdate(() => {
  store.selectCountryByRoute(route.params.alpha3Code)
})

function getBorderCountryDetails(borderAlphaCode) {
  return store.countries.find((country) => country.cca3 === borderAlphaCode);
}
</script>

<template>
  <div class="bg-light-background px-8 py-8 h-full">
    <router-link :to="{ path: '/' }">
      <button class="shadow-lg bg-white py-1 px-5 mb-12">
        <i class="fa-solid fa-arrow-left pr-3"></i>Back
      </button>
    </router-link>

    <div v-if="store.selectedCountry" class="bg-light-background py-8">
      <img :src="store.selectedCountry.flag" alt="" class="w-full h-60 object-cover" />
      <div class="flex flex-col gap-2 mt-10">
        <h1 class="font-[800] text-xl mb-4">{{ store.selectedCountry.name }}</h1>
        <p><span class="font-[600]">Native Name:</span> {{ store.selectedCountry.nativeName }}</p>
        <p><span class="font-[600]">Population:</span> {{ store.selectedCountry.population }}</p>
        <p><span class="font-[600]">Region:</span> {{ store.selectedCountry.region }}</p>
        <p><span class="font-[600]">Sub Region:</span> {{ store.selectedCountry.subregion }}</p>
        <p><span class="font-[600]">Capital:</span> {{ store.selectedCountry.capital }}</p>
      </div>

      <div class="flex flex-row gap-2 mt-10">
        <p><span class="font-[600]">Top Level Domain:</span></p>
        <template v-for="(domain, index) in store.selectedCountry.topLevelDomain" :key="index">
          <p>{{ domain }}</p>
          <span v-show="index != store.selectedCountry.topLevelDomain.length - 1">,</span>
        </template>
      </div>

      <div class="flex flex-row gap-2">
        <p><span class="font-[600]">Currencies:</span></p>
        <template v-for="(currency, index) in store.selectedCountry.currencies" :key="index">
          <p>{{ currency.name }}</p>
          <span v-show="index != store.selectedCountry.currencies.length - 1">,</span>
        </template>
      </div>

      <div class="flex flex-row gap-2">
        <p><span class="font-[600]">Languages:</span></p>
        <template v-for="(language, index) in store.selectedCountry.languages" :key="index">
          <p>
            {{ language.name
            }}<span v-show="index != store.selectedCountry.languages.length - 1">,</span>
          </p>
        </template>
      </div>

      <p class="mt-4"><span class="font-[600] text-lg">Border Countries:</span></p>
      <ul class="flex flex-row gap-3 mt-4">
        <li
          class="shadow-lg bg-white py-1 px-5"
          v-for="(border, index) in store.selectedCountry.borders"
          :key="index"
        >
        <router-link :to="{path: `/${getBorderName(border)}` , name: CountryView}">{{ getBorderName(border) }}</router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/countryStore'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const store = useCountryStore()

onMounted(async () => {
  if (!store.countries) {
    await store.fetchCountries()
    store.selectCountryByRoute(route.params.country)
    return
  }
  store.selectCountryByRoute(route.params.country)
})

function getBorderName(borderAlphaCode){
  const country = store.countries.find((country) => country.alpha3Code === borderAlphaCode)
  return country.name
}

</script>

<template>
  <div class="bg-light-background px-8 py-8 h-full">
    <router-link :to="{ path: '/' }">
      <button class="shadow-lg bg-white py-1 px-5 mb-12"><i class="fa-solid fa-arrow-left pr-3"></i>Back</button>
    </router-link>


    <div v-if="store.selectedCountry">
      <img :src="store.selectedCountry.flag" alt="" class="w-full h-60 object-cover">
      <div class="flex flex-col gap-2 mt-10">
        <h1 class="font-[800] text-xl mb-4">{{ store.selectedCountry.name }}</h1>
        <p><span class="font-[600]">Native Name:</span> {{ store.selectedCountry.nativeName }}</p>
        <p><span class="font-[600]">Population:</span> {{ store.selectedCountry.population }}</p>
        <p><span class="font-[600]">Region:</span> {{ store.selectedCountry.region }}</p>
        <p><span class="font-[600]">Sub Region:</span> {{ store.selectedCountry.subregion }}</p>
        <p><span class="font-[600]">Capital:</span> {{ store.selectedCountry.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/countryStore';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const store = useCountryStore();

onMounted(async () => {
  if (!store.countries) {
    await store.fetchCountries()
    console.log(store.countries)
    return
  }
  console.log('Mounted')
  store.selectCountryByRoute(route.params.country)
})

</script>

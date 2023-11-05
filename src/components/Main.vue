<template>
  <div class="py-7 px-4 bg-light-background dark:bg-dark-background lg:px-24">
    <div class="lg:flex lg:justify-between lg:items-center">
      <div class="relative max-w-[35rem] flex-1 xl:max-w-[40rem]">
        <i class="fa fa-search absolute top-1/2 transform -translate-y-1/2 left-10 dark:text-white"></i>
        <input class="shadow-md w-full py-4 pl-20 rounded-md dark:bg-dark-element dark:placeholder-white dark:text-white"
          type="text" placeholder="Search for a country.." v-model="searchQuery" @input="filterCountries" />
      </div>

      <select v-model="selectedRegion"
        class="mb-8 rounded-lg outline-none text-sm text-light-text dark:text-white font-[600] bg-white dark:bg-dark-element px-[1rem] py-4 mt-6 shadow-md w-[14rem] border-r-[1rem] border-transparent">
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>


    <div class="grid grid-cols-1 gap-x-28 gap-y-12 md:grid-cols-2 xl:grid-cols-4 justify-between">
      <template v-for="country in filteredCountries" :key="country.name.common">
        <router-link :to="{ name: 'CountryView', params: { alpha3Code: country.cca3 } }">
          <div>
            <Country :country="country" />
          </div>
        </router-link>
      </template>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Country from '@/components/Country.vue'
import { useCountryStore } from '@/stores/countryStore'

const store = useCountryStore()

const selectedRegion = ref("")
const searchQuery = ref("")


const filteredCountries = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return store.countries.filter(country => {
    const countryName = country.name.common.toLowerCase();
    const matchesRegion = selectedRegion.value === "" || country.region === selectedRegion.value;
    const matchesSearch = searchQuery.value === "" || countryName.startsWith(query);
    return matchesRegion && matchesSearch;
  });
});

</script>

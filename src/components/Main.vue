<template>
  <div class="py-7 px-4 bg-light-background">
    <div class="relative max-w-[40rem]">
      <i class="fa fa-search absolute top-1/2 transform -translate-y-1/2 left-10 text-gray-400"></i>
      <input class="shadow-md  w-full py-4 pl-20 rounded-md" type="text" placeholder="Search for a country.."
        v-model="searchQuery" @input="filterCountries" />
    </div>

    <select v-model="selectedRegion"
      class="mb-8 rounded-lg outline-none text-sm text-light-text font-[600] bg-white px-[1rem] py-4 mt-6 shadow-md w-[14rem] border-r-[1rem] border-transparent">
      <option value="" selected>All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      <template v-for="country in filteredCountries" :key="country.name">
        <router-link :to="{ name: 'CountryView', params: { alpha3Code: country.alpha3Code } }">
          <Country :country="country" />
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
    const countryName = country.name.toLowerCase();
    const matchesRegion = selectedRegion.value === "" || country.region === selectedRegion.value;
    const matchesSearch = searchQuery.value === "" || countryName.includes(query);
    return matchesRegion && matchesSearch;
  });
});

</script>

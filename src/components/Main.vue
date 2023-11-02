<template>
  <div class="py-7 px-4 bg-light-background">

    <div class="relative">
      <i class="fa fa-search absolute top-1/2 transform -translate-y-1/2 left-10 text-gray-400"></i>
      <input class="shadow-md w-full py-4 pl-20 rounded-md" type="text" placeholder="Search for a country..">
    </div>

    <select
      class="mb-8 rounded-lg outline-none text-sm text-light-text font-[600] bg-white px-[1rem] py-4 mt-6 shadow-md w-[14rem] border-r-[1rem] border-transparent">
      <option value="" disabled selected>Filter By Region</option>
      <option value="usa">Africa</option>
      <option value="canada">America</option>
      <option value="uk">Asia</option>
      <option value="australia">Europe</option>
      <option value="australia">Oceania</option>
    </select>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      <template v-for="country in store.countries" :key="country.name">
        <router-link :to="{ name: 'CountryView', params: { country: country.name } }"
          @click="store.selectCountry(country)">
          <Country :country="country" />
        </router-link>
      </template>
    </div>

  </div>
</template>

<script setup>
import Country from '@/components/Country.vue';
import { useCountryStore } from '@/stores/countryStore';

const store = useCountryStore()

</script>

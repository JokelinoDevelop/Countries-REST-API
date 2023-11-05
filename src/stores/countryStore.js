import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useCountryStore = defineStore('country', () => {
  let selectedCountry = ref(null)
  let countries = ref([])
  let isDark = ref(null)

  function selectCountryByRoute(alpha3Code) {
    selectedCountry.value = countries.value.find((country) => country.cca3 === alpha3Code)
  }

  async function fetchCountries() {
    if (countries.value?.length) {
      return
    }

    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      console.log(response.data)
      countries.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    selectedCountry,
    fetchCountries,
    countries,
    selectCountryByRoute,
    isDark
  }
})

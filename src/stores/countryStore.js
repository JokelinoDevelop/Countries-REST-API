import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useCountryStore = defineStore('country', () => {
  let selectedCountry = ref({
    name: ''
  })
  let countries = ref([])

  function selectCountryByRoute(countryName) {
    selectedCountry.value = countries.value.find((country) => country.name == countryName)
  }

  async function fetchCountries() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      countries.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  return { selectedCountry, fetchCountries, countries, selectCountryByRoute }
})

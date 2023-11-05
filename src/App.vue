<template>
  <div :class="{ 'dark': store.isDark }">
    <Home />
  </div>
</template>

<script setup>
import Home from '@/views/Home.vue'
import { onMounted } from "vue";
import { useCountryStore } from "./stores/countryStore";

const store = useCountryStore()

onMounted(async () => {
  await store.fetchCountries()
  console.log(store.countries)
})
</script>

<template>
  <div :class="{ 'dark': store.isDark }">
    <Home />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Home from '@/views/Home.vue'
import { useCountryStore } from "./stores/countryStore";

const store = useCountryStore()

onMounted(async () => {
  await store.fetchCountries()
})
</script>

<template>
  <div class="h-screen">
    <Header />

    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from '@/components/Header.vue'
import { useCountryStore } from '@/stores/countryStore'

const store = useCountryStore()

onMounted(async () => {
  await store.fetchCountries()
  console.log(store.countries)
})
</script>

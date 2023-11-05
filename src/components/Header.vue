<template>
  <div
    class="flex bg-light-background dark:bg-dark-element dark:text-white justify-between items-center py-8 px-4 shadow-md relative transition-all duration-300 lg:px-24">
    <h2 class="font-[800]">Where in the world?</h2>

    <div class="flex justify-between gap-4 items-center cursor-pointer" @click.prevent="store.isDark = !store.isDark">
      <i :class="{ 'fa-regular fa-moon fa-nd': !store.isDark, 'fa-solid fa-moon fa-sm': store.isDark }"></i>
      <p class="font-[600]">Dark Mode</p>
    </div>
  </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/countryStore';

const store = useCountryStore()
</script>

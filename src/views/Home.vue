<template>
  <div class="h-screen dark:bg-dark-background bg-light-background">
    <Header />

    <RouterView />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

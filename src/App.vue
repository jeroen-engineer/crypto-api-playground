<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex justify-center">
      <RouterLink to="/" class="p-5">Home</RouterLink>
      <RouterLink to="/about" class="p-5">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

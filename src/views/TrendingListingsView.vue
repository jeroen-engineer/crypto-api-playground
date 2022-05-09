<script setup>
import { ref, onMounted, computed } from "vue";
import { useCryptoStore } from "../stores/crypto";
const store = useCryptoStore();

onMounted(() => {
  if (!store.cryptoData.length) {
    store.fetchCryptoCurrencies();
  }
});
</script>

<template>
  <div>
    <div v-if="store.showLoading">Loading</div>
    <div v-else>Crypto data: {{ store.cryptoData }}</div>
  </div>
</template>

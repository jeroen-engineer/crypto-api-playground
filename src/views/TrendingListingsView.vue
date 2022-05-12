<script setup>
import CryptoList from "../components/CryptoList.vue";
import { onMounted, ref } from "vue";
import { useCryptoStore } from "../stores/crypto";
import {
  TRENDING_LISTING,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

const fetchErrorMessage = ref(TRENDING_LISTING.fetchErrorMessage);
const tableTitles = ref(CRYPTO_TABLE_TITLES);
const tableDataFields = ref(CRYPTO_TABLE_DATA_FIELDS);
const tableDataSymbols = ref(CRYPTO_DATA_SYMBOLS);
const tableDataPrecisions = ref(CRYPTO_DATA_PRECISIONS);

const store = useCryptoStore();

onMounted(() => {
  if (!store.cryptoData.length) {
    store.fetchCryptoCurrencies();
  }
});
</script>

<template>
  <div>
    <CryptoList
      :cryptoData="store.cryptoData"
      :showLoading="store.showLoading"
      :showError="store.error"
      :fetchErrorMessage="fetchErrorMessage"
      :tableTitles="tableTitles"
      :tableDataFields="tableDataFields"
      :tableDataSymbols="tableDataSymbols"
      :tableDataPrecisions="tableDataPrecisions"
      :showPortfolio="true"
    />
  </div>
</template>

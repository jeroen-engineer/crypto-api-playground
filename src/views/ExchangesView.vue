<script setup>
import { ref, onMounted } from "vue";
import CryptoList from "../components/CryptoList.vue";
import { useCryptoStore } from "../stores/crypto";
import {
  EXCHANGES,
  EXCHANGE_TABLE_TITLES,
  EXCHANGE_TABLE_DATA_FIELDS,
  EXCHANGE_DATA_SYMBOLS,
  EXCHANGE_DATA_PRECISIONS,
} from "../constants";

const store = useCryptoStore();

const fetchErrorMessage = ref(EXCHANGES.fetchErrorMessage);
const tableTitles = ref(EXCHANGE_TABLE_TITLES);
const tableDataFields = ref(EXCHANGE_TABLE_DATA_FIELDS);
const tableDataSymbols = ref(EXCHANGE_DATA_SYMBOLS);
const tableDataPrecisions = ref(EXCHANGE_DATA_PRECISIONS);

onMounted(() => {
  if (!store.exchangeData.length) {
    store.fetchExchanges();
  }
});
</script>

<template>
  <CryptoList
    :cryptoData="store.exchangeData"
    :showLoading="store.showLoading"
    :showError="store.error"
    :fetchErrorMessage="fetchErrorMessage"
    :tableTitles="tableTitles"
    :tableDataFields="tableDataFields"
    :tableDataSymbols="tableDataSymbols"
    :tableDataPrecisions="tableDataPrecisions"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import CryptoList from "../components/CryptoList.vue";
import { useCryptoStore } from "../stores/crypto.js";
import Loading from "../components/Loading.vue";

import {
  PORTFOLIO,
  CRYPTO_TABLE_TITLES,
  CRYPTO_TABLE_DATA_FIELDS,
  CRYPTO_DATA_SYMBOLS,
  CRYPTO_DATA_PRECISIONS,
} from "../constants";

const store = useCryptoStore();

const fetchErrorMessage = ref(PORTFOLIO.fetchErrorMessage);
const tableTitles = ref(CRYPTO_TABLE_TITLES);
const tableDataFields = ref(CRYPTO_TABLE_DATA_FIELDS);
const tableDataSymbols = ref(CRYPTO_DATA_SYMBOLS);
const tableDataPrecisions = ref(CRYPTO_DATA_PRECISIONS);

onMounted(() => {
  store.checkLocalStoragePortfolio();
  if (!store.cryptoData.length) {
    store.fetchCryptoCurrencies();
  }
});
</script>

<template>
  <div v-if="!!store.cryptoPortfolioFullData.length">
    <CryptoList
      :cryptoData="store.cryptoPortfolioFullData"
      :fetchErrorMessage="fetchErrorMessage"
      :tableTitles="tableTitles"
      :tableDataFields="tableDataFields"
      :tableDataSymbols="tableDataSymbols"
      :tableDataPrecisions="tableDataPrecisions"
      :showPortfolio="true"
    />
  </div>
  <div v-else-if="store.showLoading">
    <Loading />
  </div>
  <div v-else>
    <div class="container">
      <div class="row wrapper-row mt-5 p-5 align-items-center">
        <div class="col-6 text-center">
          <h1 class="mb-4">
            You don't have any cryptocurrency in your portfolio.
          </h1>
          <router-link
            to="/trendinglistings"
            class="border bg-emerald-500 text-gray-800 hover:bg-emerald-300 px-3 py-1"
            >Check trending cryptos to add your portfolio</router-link
          >
        </div>
        <div class="col-6 text-center"></div>
      </div>
    </div>
  </div>
</template>

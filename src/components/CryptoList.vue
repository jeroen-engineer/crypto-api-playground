<script setup>
import { onMounted } from "vue";
import { useCryptoStore } from "../stores/crypto";
import Loading from "../components/Loading.vue";
import valueConverter from "../utils/valueConverter";
const props = defineProps({
  showError: Boolean,
  cryptoData: Array,
  showLoading: Boolean,
  showPortfolio: Boolean,
  fetchErrorMessage: String,
  tableTitles: Array,
  tableDataFields: Object,
  tableDataSymbols: Object,
  tableDataPrecisions: Object,
});

const store = useCryptoStore();

const checkValue = (val, symbol, precision) => {
  return valueConverter(val, symbol, precision);
};

const checkPortfolio = (cryptoId) => {
  if (!!store.portfolioList.length && !!store.cryptoData.length) {
    return store.portfolioList.includes(cryptoId);
  } else {
    return false;
  }
};

onMounted(() => {
  store.checkLocalStoragePortfolio();
});
</script>

<template>
  <div>
    <div v-if="showLoading"><Loading /></div>
    <div class="flex flex-col mt-8 mx-2 md:mx-10" v-else>
      <div
        class="py-2 my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        v-if="!showLoading && !!cryptoData.length"
      >
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="(title, i) in tableTitles"
                  :key="i"
                  class="px-6 py-2 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                >
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white"
              v-for="crypto in cryptoData"
              :key="crypto.id"
            >
              <tr class="whitespace-nowrap hover:bg-slate-200">
                <td
                  v-for="(key, i) in tableDataFields"
                  :key="i"
                  class="px-6 py-4 text-sm text-gray-500"
                >
                  <small>{{
                    checkValue(
                      crypto[key],
                      tableDataSymbols[key],
                      tableDataPrecisions[key]
                    )
                  }}</small>
                </td>
                <td
                  class="px-6 py-4 text-sm text-gray-500 cursor-pointer"
                  v-if="!checkPortfolio(crypto.id)"
                  v-show="showPortfolio"
                >
                  <i
                    class="fas fa-regular fa-plus"
                    @click="store.addToPortfolio(crypto.id)"
                  ></i>
                </td>
                <td
                  @click="store.removeFromPortfolio(crypto.id)"
                  class="px-6 py-4 text-sm text-gray-500 cursor-pointer"
                  v-else
                >
                  <i class="fas fa-minus"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="showError">{{ fetchErrorMessage }}</div>
    </div>
  </div>
</template>

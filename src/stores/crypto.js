import { defineStore } from "pinia";
import cryptoApi from "../api/crypto";
import { CRYPTO_API } from "../constants.js";

export const useCryptoStore = defineStore({
  id: "crypto",
  state: () => ({
    cryptoData: [],
    showLoading: true,
  }),
  getters: {},
  actions: {
    async fetchCryptoCurrencies() {
      try {
        const {
          data: { data },
        } = await cryptoApi.fetchData(
          CRYPTO_API.BASE_URL,
          CRYPTO_API.CRYPTO_PATH
        );
        this.cryptoData = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.showLoading = false;
      }
    },
  },
});

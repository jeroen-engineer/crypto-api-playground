import { defineStore } from "pinia";
import cryptoApi from "../api/crypto";
import { CRYPTO_API, CRYPTO_PORTFOLIO } from "../constants.js";

export const useCryptoStore = defineStore({
  id: "crypto",
  state: () => ({
    cryptoData: [],
    portfolioList: [],
    exchangeData: [],
    showLoading: true,
    error: false,
  }),
  getters: {
    cryptoPortfolioFullData: (state) => {
      return state.cryptoData.filter((crypto) =>
        state.portfolioList.includes(crypto.id)
      );
    },
  },
  actions: {
    async fetchCryptoCurrencies() {
      try {
        this.showLoading = true;
        const {
          data: { data },
        } = await cryptoApi.fetchData(
          CRYPTO_API.BASE_URL,
          CRYPTO_API.CRYPTO_PATH
        );
        this.cryptoData = data;
      } catch (error) {
        this.error = true;
        console.log(error);
      } finally {
        this.showLoading = false;
      }
    },
    async fetchExchanges() {
      try {
        this.showLoading = true;
        const {
          data: { data },
        } = await cryptoApi.fetchData(
          CRYPTO_API.BASE_URL,
          CRYPTO_API.EXCHANGE_PATH
        );
        this.exchangeData = data;
      } catch (error) {
        this.error = true;
        console.log(error);
      } finally {
        this.showLoading = false;
      }
    },

    addToPortfolio(cryptoId) {
      const portfolio =
        JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO)) || [];

      portfolio.push(cryptoId);
      window.localStorage.setItem(CRYPTO_PORTFOLIO, JSON.stringify(portfolio));
      this.portfolioList = portfolio;
    },

    removeFromPortfolio(targetCryptoId) {
      const portfolio = JSON.parse(
        window.localStorage.getItem(CRYPTO_PORTFOLIO)
      );

      const updatedPortfolio = portfolio.filter(
        (cryptoId) => cryptoId !== targetCryptoId
      );

      window.localStorage.setItem(
        CRYPTO_PORTFOLIO,
        JSON.stringify(updatedPortfolio)
      );
      this.portfolioList = updatedPortfolio;
    },

    checkLocalStoragePortfolio() {
      const portfolio =
        JSON.parse(window.localStorage.getItem(CRYPTO_PORTFOLIO)) || [];
      this.portfolioList = portfolio;
    },
  },
});

export const CRYPTO_API = {
  BASE_URL: "https://api.coincap.io",
  CRYPTO_PATH: "/v2/assets",
  EXCHANGE_PATH: "/v2/exchanges",
};

export const LOADING1 = "Loading...";
export const LOADING2 =
  "This may take a few seconds, please don't close this page.";
export const PORTFOLIO = {
  fetchErrorMessage: "You don't have any crypto currency in your portfolio.",
};
export const TRENDING_LISTING = {
  fetchErrorMessage: "There is an problem occured. Please try again later.",
};
export const EXCHANGES = {
  fetchErrorMessage: "There is an problem occured. Please try again later.",
};
export const CRYPTO_TABLE_TITLES = [
  "Name",
  "Price",
  "Market Cap",
  "Volume (24Hr)",
  "Change (24Hr)",
  "My Portfolio",
];
export const CRYPTO_TABLE_DATA_FIELDS = {
  NAME: "name",
  PRICE: "priceUsd",
  marketCap: "marketCapUsd",
  volume: "volumeUsd24Hr",
  changePercent: "changePercent24Hr",
};
export const CRYPTO_DATA_SYMBOLS = {
  name: "",
  priceUsd: "$",
  marketCapUsd: "$",
  volumeUsd24Hr: "$",
  changePercent24Hr: "%",
};
export const CRYPTO_DATA_PRECISIONS = {
  priceUsd: 3,
  marketCapUsd: 2,
  volumeUsd24Hr: 2,
  changePercent24Hr: 2,
};
export const EXCHANGE_TABLE_TITLES = [
  "Name",
  "Trading Pairs",
  "Volume (24Hr)",
  "Total (%)",
];
export const EXCHANGE_TABLE_DATA_FIELDS = {
  NAME: "name",
  TRADING_PAIRS: "tradingPairs",
  VOLUME: "volumeUsd",
  PERCENT_TOTAL_VOLUME: "percentTotalVolume",
};

export const EXCHANGE_DATA_SYMBOLS = {
  name: "",
  tradingPairs: "",
  volumeUsd: "$",
  percentTotalVolume: "%",
};
export const EXCHANGE_DATA_PRECISIONS = {
  volumeUsd: 3,
  percentTotalVolume: 2,
};

export const CRYPTO_PORTFOLIO = "crypto_portfolio";

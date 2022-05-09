<script setup>
import { ref } from "vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div class="bg-emerald-400">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-slate-800"
          >CRYPTO-API-PLAYGROUND
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <router-link
          to="/trendinglistings"
          exact-active-class="active"
          class="text-gray-600 hover:text-slate-800"
          >Trending Listings</router-link
        >
        <router-link
          to="/exchanges"
          exact-active-class="active"
          class="text-gray-600 hover:text-slate-800"
          >Exchanges</router-link
        >
        <router-link
          to="portfolio"
          exact-active-class="active"
          class="text-gray-600 hover:text-slate-800"
          >Portfolio</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<template>
  <main class="flex flex-col md:flex-row justify-around">
    <div class="flex flex-col md:w-2/6">
      <label class="mx-4 text-green-700 text-xl">Search your coin</label>
      <input
        class="border border-gray-400 rounded shadow-xl mx-4 p-1"
        placeholder="search coins..."
        type="text"
      />
      <button
        class="mt-2 border border-slate-400 bg-emerald-400 hover:bg-emerald-200 shadow-lg py-1 px-1 mx-4 rounded"
      >
        Search
      </button>
    </div>
    <div class="flex justify-center p-2 mt-3 md:mt-0">
      <img
        src="../assets/home-crytpo.jpg"
        class="img-fluid m-3 p-3 rounded-xl shadow-2xl"
      />
    </div>
  </main>
</template>

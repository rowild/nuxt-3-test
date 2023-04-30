<template>
  <h1 class="text-xl font-bold pb-6">Catalog</h1>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="item in items" v-bind:key="item.id">
      <CatalogCard :item="item" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "catalog",
})

// execute on server and browser
const { data: items } = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div>
    <CatalogDetail :item="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "catalog",
})

// id must match the route file in the folder!
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

// fetch unique data
const { data: product } = await useFetch(uri, { key: id })

if(!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found!',
    fatal: true // Needed for errors thrown in the client
  })
}
</script>

<template>
    <div class="bg-gray-50 min-h-screen">
      <div class="container mx-auto pt-8">
        <h1 class="font-bold text-3xl">{{ item.title }}</h1>
        <p>{{ item.body }}</p>
        <nuxt-link to="/">Back</nuxt-link>
      </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "catalog",
});

const route = useRoute();
// const id = route.params.id
// const { id } = useRoute().params;
// const { post } = await $fetch(`/api/posts/$(id)`);
const { item } = await $fetch(`/api/posts/$(route.params.id)`);
</script>
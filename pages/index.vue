<template>
  <h1 class="text-4xl ">Willkommen!</h1>

  <p v-if="time">Es ist {{ time }} Uhr.</p>
  <p v-else>Es ist ...</p>

  <div class="container bg-slate-100 border-b-2 pb-6 mb-8">
    <nuxt-page />
  </div>


  <!--
  <div class="bg-gray-50 min-h-screen">
        <div class="container mx-auto pt-8">
            <h1 class="font-bold text-3xl">Blog posts</h1>

            <ul v-if="posts" class="w-fit mt-8">
                <li v-for="post in posts" v-bind:key="post.id" class="p-2 border-b-2 border-indigo-400 hover:bg-indigo-400 hover:text-white hover:cursor-pointer">
                    <NuxtLink :to="'/posts/' + post.id">{{ post.title }}</NuxtLink>
                </li>
            </ul>

            <p else>No posts</p>
        </div>
    </div>
    -->
</template>

<script setup>
const time = await $fetch('/api/now');

const { posts } = await $fetch('/api/posts');
</script>

<template>
    <div class="bg-gray-50 min-h-screen">
        <div class="container mx-auto pt-8">
            <h1 class="font-bold text-3xl">{{ item.title }}</h1>

            <ul class="w-fit mt-8">
                <li class="p-2 border-b-2 border-indigo-400 hover:bg-indigo-400 hover:text-white hover:cursor-pointer">
                    <NuxtLink :to="'/post/' + item.id">{{ item.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps({ item: Object });
</script>
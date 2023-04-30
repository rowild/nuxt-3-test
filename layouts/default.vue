<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <nuxt-link to="/" class="font-bold"> Health Watcher </nuxt-link>
      <ul class="flex gap-4">
        <li>
          <nuxt-link to="/"> Startpage </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about"> About </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/catalog" class="btn"> Catalog </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

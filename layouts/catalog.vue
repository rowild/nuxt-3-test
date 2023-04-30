<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4">
      <nuxt-link to="/catalog" class="font-bold"> JVdS Catalog </nuxt-link>
    </nav>
  </header>

  <div class="container mx-auto p-4">
    <slot />
  </div>

  <footer class="container mx-auto p-4 lex justify-between border-t-2">
    <nav>
      <ul class="flex gap-4">
        <li>
          <nuxt-link to="/"> Startpage </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about"> About </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/catalog"> Catalog </nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    // '@nuxtjs/i18n',
    // ['@nuxtjs/robots', {  /* module options */  }],
    // 'nuxt-icon'
  ],
  app: {
    head: {
      title: 'John Van der Slice | Composer, Teacher, Analyst',
      meta: [
        { name: 'description', content: 'This website is dedicated to the music of the American composer John Van der Slice.'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})

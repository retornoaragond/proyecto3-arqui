export default defineNuxtConfig({
  modules: ["@nuxtjs/snipcart"],
  snipcart: {
    publicApiKey:
      "Njc0MjUwYWEtODU5YS00MDM4LWJkMjEtNmIyMzU1MWE1NmQwNjM4MzU3NjExMDAzMTQwMjYy",
  },
  components: true,
  app: {
    target: "static",
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Meta description",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "http://fonts.googleapis.com/css?family=Raleway:400,300,600",
        },
        { rel: "icon", type: "image/png", href: "images/favicon.png" },
      ],
    },
  },
});

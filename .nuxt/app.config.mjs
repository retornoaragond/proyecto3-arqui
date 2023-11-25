
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "0766b232-d42f-46aa-b9d9-2bc2dcac4595"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)

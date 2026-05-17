import '@slidev/types'
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
  },
})

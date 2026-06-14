import '@slidev/types'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // Rolldown can't interpret some /* #__PURE__ */ annotations in the
      // prebuilt @vueuse/core bundle. These are harmless warnings from a
      // dependency, so we silence them to keep the build output readable.
      onLog(level, log, handler) {
        if (log.code === 'INVALID_ANNOTATION' && log.id?.includes('@vueuse/core')) {
          return
        }
        handler(level, log)
      },
    },
  },
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

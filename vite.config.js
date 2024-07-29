import { fileURLToPath } from 'node:url'

export default {
  resolve: {
    alias: {
      '~bootstrap': fileURLToPath(new URL('./node_modules/bootstrap', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
        scss: {
            quietDeps: true,
        }
    }
  }
}

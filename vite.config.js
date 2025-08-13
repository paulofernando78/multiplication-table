import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        matematica: path.resolve(__dirname, '/src/materia/matematica.html'),
        tabuada: path.resolve(__dirname, '/src/materia/matematica/tabuada.html'),
      }
    },
    outDir: 'dist',
  },
})
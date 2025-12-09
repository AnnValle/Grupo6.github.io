import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/Proyecto-Programacion-Web2/',
  
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', 
        scripts: 'assets/js/scripts.js' 
      }
    }
  },

  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'assets/js/*', dest: 'assets/js' },
        { src: 'assets/css/*', dest: 'assets/css' },
        { src: 'components/*.html', dest: 'components' },
        { src: '*.html', dest: '' },
        { src: 'assets/img/*', dest: 'assets/img' }
      ]
    })
  ]
})
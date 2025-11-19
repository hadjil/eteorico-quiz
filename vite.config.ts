// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // 🔑 CLAVE: Usar la ruta explícita de tu repositorio
  base: '/eteorico-quiz/' 
})
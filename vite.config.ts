import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Establece la base URL al nombre de tu repositorio
  base: '/eteorico-quiz/' 
})
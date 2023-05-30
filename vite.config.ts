import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //TODO: REMOVE FOR PA BUILD
  // base: '/polkassembly-landing/',
  plugins: [react()]
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for graphiql lib to work
    global: {},
  } 
})

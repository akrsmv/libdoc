import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for graphiql lib to work
        global: {}
    }
});

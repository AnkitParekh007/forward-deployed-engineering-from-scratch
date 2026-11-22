import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({isSsrBuild})=>({base:'/forward-deployed-engineering-from-scratch/',plugins:[react()],build:isSsrBuild?{}:{rollupOptions:{output:{manualChunks(id){if(/\/(catalog|projects|content\.generated)\.json$|\/journey-data\.ts$/.test(id))return 'learning-content'}}}}}));

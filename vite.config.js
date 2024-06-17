import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath, URL } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({

  rollupOptions: {
    input: 'src/index.html'
  },
  server: {
    port: 8070,
    hot: true,
    base: '/',
    build: {
      outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
      scripts: {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  }
  }

  }
});
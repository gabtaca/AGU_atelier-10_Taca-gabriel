import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'src', // Set the root directory to 'src'
  build: {
    outDir: '../dist', // Output directory for the build
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.html') // Correctly resolve the index.html file
    }
  },
  server: {
    port: 8070, // Custom port for the dev server
    hot: true // Enable Hot Module Replacement (HMR)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Set alias for the 'src' directory
    }
  }
});

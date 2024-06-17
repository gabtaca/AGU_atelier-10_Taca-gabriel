import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath, URL } from 'url';

// Get the directory name of the current module file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // No need to change the root if the root is the project directory
  // Ensure the server is set up correctly
  server: {
    port: 8070,
    hot: true
  },
  // Resolve aliases for cleaner imports, if needed
  resolve: {
    alias: {
      // Example: '@' can be used to import from the `src` directory
      '@': path.resolve(__dirname, 'src')
    }
  }
});
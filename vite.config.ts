import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["slidev-addon-tldraw > hls.js"],
  },
});

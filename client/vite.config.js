import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/images"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@redux": path.resolve(__dirname, "./src/redux/reducer"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@util": path.resolve(__dirname, "./src/util"),
      "@hoc": path.resolve(__dirname, "./src/hoc"),
    },
  },
  plugins: [react(), svgr()],
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});

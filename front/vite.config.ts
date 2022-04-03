import { defineConfig } from "vite";
import swc from "unplugin-swc";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), swc.vite()],
});

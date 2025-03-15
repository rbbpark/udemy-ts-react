import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/vitest.setup.ts"],
    globals: true,
  },
} as UserConfig);

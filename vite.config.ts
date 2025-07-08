import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});

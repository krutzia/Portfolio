// Local wrapper replaces external bundle config. Keep the same API shape.
// You can pass additional config via defineConfig({ tanstackStart: { ... } }) if needed.
import { defineConfig } from "./vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

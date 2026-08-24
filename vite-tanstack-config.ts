import { defineConfig as viteDefineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindPlugin from "@tailwindcss/vite";

type TanStackStartConfig = UserConfig & {
  tanstackStart?: unknown;
};

export function defineConfig(config: TanStackStartConfig) {
  // Wrapper provides common plugins used across the project:
  // - `vite-tsconfig-paths` so `@/...` resolves to `src/...`
  // - React plugin for fast refresh and JSX handling
  const basePlugins = [tailwindPlugin(), tsconfigPaths(), react()];

  const incoming = { ...config };
  const incomingPlugins = incoming.plugins || [];

  return viteDefineConfig({
    ...incoming,
    plugins: [
      ...basePlugins,
      ...(Array.isArray(incomingPlugins) ? incomingPlugins : [incomingPlugins]),
    ],
  });
}

export default defineConfig;

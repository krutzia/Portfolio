import { defineConfig as viteDefineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindPlugin from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

type TanStackStartConfig = UserConfig & {
  tanstackStart?: unknown;
};

export function defineConfig(config: TanStackStartConfig) {
  const incoming = { ...config };
  const incomingPlugins = incoming.plugins || [];

  return viteDefineConfig({
    ...incoming,
    ssr: {
      noExternal: ["nodemailer"],
    },
    plugins: [
      tanstackStart(incoming.tanstackStart ?? {}),
      tailwindPlugin(),
      tsconfigPaths(),
      react(),
      ...(Array.isArray(incomingPlugins) ? incomingPlugins : [incomingPlugins]),
    ],
  });
}

export default defineConfig;

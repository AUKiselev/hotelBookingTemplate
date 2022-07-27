import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: "vue3",
      autoInstall: true,
      customCollections: {
        booking: FileSystemIconLoader("./src/assets/img/custom-icons"),
      },
    }),
    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" }),
        IconsResolver({
          customCollections: ["booking"],
        }),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/css/_variables.sass"`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

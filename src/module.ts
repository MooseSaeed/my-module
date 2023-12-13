import { defineNuxtModule, createResolver, addPluginTemplate } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "my-module",
    configKey: "myModule",
  },

  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addPluginTemplate({
      src: resolve("./runtime/templates/template-plugin.ejs"),
      options: {
        ssr: true,
      },
    });
  },
});

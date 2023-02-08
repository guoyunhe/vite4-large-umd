import { UserConfig } from "vite";

const config: UserConfig = {
  build: {
    target: "es2015",
    lib: {
      entry: "index.tsx",
      formats: ["umd"],
      name: "Foobar",
    },
    minify: false,
    rollupOptions: {
      external: ["react"],
    },
    commonjsOptions: {
      // https://github.com/originjs/vite-plugins/issues/9#issuecomment-924668456
      transformMixedEsModules: true,
    },
  },
};

export default config;

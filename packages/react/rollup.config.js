import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Avatar/index.ts",
    "src/atoms/Button/index.ts",
    "src/atoms/CardSubtitle/index.ts",
    "src/atoms/CardTitle/index.ts",
    "src/atoms/Icon/index.ts",
    "src/atoms/Input/index.ts",
    "src/atoms/Link/index.ts",
    "src/atoms/DefinitionList/index.ts",
    "src/atoms/DateInfo/index.ts",
    "src/atoms/Logo/index.ts",
    "src/atoms/TextBlock/index.ts",
    "src/atoms/ThemeToggler/index.ts",
    "src/atoms/VisuallyHidden/index.ts",
    "src/atoms/Wrapper/index.ts",
  ],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    Ts(),
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000,
    }),
  ],
  preserveModules: true,
  external: ["react", "@ds.e/foundation"],
};

import Ts from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";

export default {
  input: [
    "src/index.ts",
    "src/atoms/Avatar/index.ts",
    "src/atoms/Button/index.ts",
    "src/atoms/CardList/index.ts",
    "src/atoms/CardSubtitle/index.ts",
    "src/atoms/CardTitle/index.ts",
    "src/atoms/Input/index.ts",
    "src/atoms/List/index.ts",
    "src/atoms/ListContent/index.ts",
    "src/atoms/ListIcon/index.ts",
    "src/atoms/DefinitionList/index.ts",
    "src/atoms/DateInfo/index.ts",
    "src/atoms/Logo/index.ts",
    "src/atoms/Modal/index.ts",
    "src/atoms/TextBlock/index.ts",
    "src/atoms/ThemeToggler/index.ts",
    "src/atoms/VisuallyHidden/index.ts",
    "src/atoms/Wrapper/index.ts",
    "src/atoms/Header/index.ts",
    "src/atoms/ListItem/index.ts",
    "src/molecules/SearchBar/index.ts",
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

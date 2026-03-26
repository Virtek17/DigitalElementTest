import eslintConfig from "@delement/eslint-config-master";

export default [
  ...eslintConfig,
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "**/*.css",
      "**/*.scss",
      "**/*.sass",
    ],
  },
];

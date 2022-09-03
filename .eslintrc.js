module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "prettier",
  ],
  parserOptions: {
    project: "packages/*/tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/ban-types": "off",
    "import/no-unresolved": "off",
    // TODO: エラーにする
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
  },
};

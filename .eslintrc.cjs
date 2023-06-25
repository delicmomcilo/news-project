module.exports = {
  env: { browser: true, es2020: true },
  extends: [],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [],
  rules: {
    "prefer-arrow-callback": "error",
  },
};

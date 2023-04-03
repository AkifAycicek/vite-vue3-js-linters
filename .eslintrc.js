module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType:
      "module",
  },
  plugins: [
    "vue",
  ],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "no-unused-vars":
      "warn",
  },
}

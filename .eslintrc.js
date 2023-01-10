module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off", /*import export  배우기 전이라서 오류 안뜨게 해줄려고 한 것 좋은방법 아님 (선언안한게 표시가 안됌)*/ 
  },
};

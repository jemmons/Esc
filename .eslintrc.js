module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],
  },
  "env": {
    "es6": true,
    "node": true,
  },
  "globals": {
    "exports": "readonly",
    "nova": "readonly",
  }
};

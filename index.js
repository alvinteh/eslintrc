module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "comma-dangle": 0,
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
    "indent": [2, 2, { "SwitchCase": 1 }]
  }
};

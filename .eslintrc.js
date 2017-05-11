module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,

    "amd": false,
    "applescript": false,
    "atomtest": false,
    "commonjs": false,
    "embertest": false,
    "greasemonkey": false,
    "jasmine": false,
    "meteor": false,
    "mocha": false,
    "mongo": false,
    "nashorn": false,
    "node": false,
    "phantomjs": false,
    "protractor": false,
    "serviceworker": false,
    "shelljs": false,
    "webextensions": false,
    "worker": false
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
    "airbnb"
  ],
  "parser": "babel-eslint",
  "plugins": [
    // "airbnb",  // not a plugin; oops. This is a reminder.
    "promise",
    "react",
    "css-modules",
    "header",
    "jest",
    "jsdoc",
    "jsx-a11y",
    "@br/laws-of-the-game",
    "requirejs",
    "security",
    "babel"
  ],
  rules: {
    // Cleanup per CI running ESLint w/o same failures on dev system. Natch.
    "react/jsx-tag-spacing": [2, { 'before-self-closing': 'always' }],
    "jsx-a11y/img-has-alt": [2],
    // These are disabled to silence ESLint warnings; something, someplace is
    // attempting to inspect/change the rule settings (which at one time had
    // default values). When the definitions of the defaults were removed, not
    // all of the *uses* of those rules were removed; hence, ESLint bawls *us*
    // out. Thanks, Facebork.
    "import/no-named-default": 0,
    "react/jsx-tag-spacing": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,

    // These are (intentionally) disabled.
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0, // but only *export* one component, please...
    "react/prefer-stateless-function": 0
  }
};

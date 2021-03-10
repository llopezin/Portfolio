module.exports = {
  extends: [
    //"stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    //Sheet
    "max-empty-lines": 5,
    "max-line-length": 80,
    indentation: 2,

    //Property syntax
    "value-keyword-case": "lower",
    "property-case": "lower",
    "color-hex-case": "lower",
    "no-eol-whitespace": true,

    //Block syntax
    "block-closing-brace-empty-line-before": "never",
    "block-no-empty": true,

    //Declaration
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,

    //Specificity
    "declaration-no-important": true,
    "selector-nested-pattern": "^&",
    "selector-max-specificity": "0,2,1",
    "selector-max-attribute": 1,
    "selector-max-universal": 0,
    "selector-max-type": 1,
    "selector-no-qualifying-type": true,
    "no-descending-specificity": true,
    "max-nesting-depth": 0,

    //Value Units
    "length-zero-no-unit": true,
    "number-no-trailing-zeros": true,

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
          "mixin",
          "include",
        ],
      },
    ],
  },
};

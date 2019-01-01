module.exports = {
  ignore: ['node_modules', 'build'],
  plugins: [
    "module:@babel/plugin-proposal-class-properties", ["module:@babel/plugin-proposal-decorators", {
      legacy: true
    }],
    "module:@babel/plugin-proposal-export-namespace-from",
    "module:@babel/plugin-proposal-function-sent",
    "module:@babel/plugin-proposal-json-strings",
    "module:@babel/plugin-proposal-numeric-separator",
    "module:@babel/plugin-proposal-throw-expressions",
    "module:@babel/plugin-syntax-dynamic-import",
    "module:@babel/plugin-syntax-import-meta",
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@vue/app'
  ]
}

module.exports = {

  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
    }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env'],
        [
          '@vue/app',
          {
            useBuiltIns: 'entry',
          },
        ],
      ],
    },
  },
  plugins: ['dynamic-import-node', '@babel/plugin-transform-modules-commonjs'],
};


// env: {
//   test: {
//     presets: [
//       ['env', {
//         targets: {
//           node: 'current',
//         },
//       }],
//     ],
//       plugins: ['dynamic-import-node'],
//   },
// },


//
// module.exports = {
//   plugins: ['transform-for-of-as-array'],
//   presets: [
//     [
//       '@vue/app',
//       // {
//       //   useBuiltIns: 'entry',
//       // },
//     ],
//   ],
//   env: {
//     test: {
//       presets: [['@babel/preset-env']],
//     },
//   },
// };

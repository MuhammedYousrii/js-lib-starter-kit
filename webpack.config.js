const path = require('path');
const { dependencies, peerDependencies, name } = require('./package.json');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');





const LIB_NAME = name.split('/')[1];
const ROOT = process.cwd();
const DESTINATION = path.resolve(ROOT, 'dist');



/* RESOLVING HANDLING */
const RESOLVE = {
  modules: [
    path.resolve(ROOT, 'node_modules'),
    path.resolve(ROOT, 'bower_components')
  ],
  mainFields: ['browser', 'module', 'main'],
  descriptionFiles: ['package.json', 'bower.json'],
  extensions: ['.tsx', '.ts', '.js', '.html', 'json'],
};

const PLUGINS = [
  new CleanWebpackPlugin({
      verbose: true,
  }),

//   new copyWebpackPlugin([{
//     from: "package.json",
//     to: DESTINATION
//   }, {
//     from: "README.md",
//     to: DESTINATION
//   }, {
//     from: "CHANGELOG.md",
//     to: DESTINATION
//   }, {
//     from: ".npmignore",
//     to: DESTINATION
//   }, 
//   // {
//   //   from: path.join(ROOT, '@types/src/'),
//   //   to: path.join(DESTINATION, '@types')
//   // }
// ])
];


/* OUTPUT CONFIGURATION */
const OUTPUT = {
  path: DESTINATION,
  filename: '[name].min.js',
  libraryTarget: 'umd',
  library: LIB_NAME,
}

const MODULE = {
  rules: [
    // Scripts
    {
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: 'ts-loader',
      include: [ROOT],
    },
  ],

};

const EXTERNALS = Object.keys(dependencies)


module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return [
    {
        // watch: true,
        node: {
          fs: 'empty',
        },
        entry: {
          [name]: ROOT + `/src/${name}.ts`,
        },
        output: OUTPUT,
        context: ROOT,
        resolve: RESOLVE,
        module: MODULE,
        mode: argv.mode,
        plugins: PLUGINS,
        devtool: isProduction ? 'none': 'source-map',
        devServer: {},
        externals: EXTERNALS
      }
  ] 
 


}

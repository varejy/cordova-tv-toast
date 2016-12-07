var path     = require('path');
var webpack  = require('webpack');
var rucksack = require('rucksack-css');
var cssnext  = require('postcss-cssnext');
//Configs
var DEV      = 'development';
var NODE_ENV = process.env.NODE_ENV || DEV;

module.exports = {
  devtool: (NODE_ENV === DEV)? 'inline-source-map' : false,
  watch  : (NODE_ENV === DEV)? true : false,
  entry  : './src/app/index',
  
  output: {
    path      : path.join(__dirname, 'www'),
    filename  : 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: [
      path.join(__dirname, 'www'),
      path.join(__dirname, 'platforms/browser/www'),
    ],
    compress   : false,
    port       : 8080,
    hot        : true,
    inline     : true,
    publicPath : '/',
    historyApiFallback: true
  },

  resolve: {
    modules   : ['src', 'node_modules'],
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test   : /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: path.join(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      },
      {
        test   : /\.(svg|gif|png|jpe?g|ttf|woff2?|eot)$/,
        loaders: ['url-loader?limit=4096&name=./assets/[hash].[ext]'] 
      },
      {
        test   : /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
        exclude: path.join(__dirname, 'src'),
        include: path.join(__dirname, 'node_modules')
      },
      {
        test   : /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ],
        exclude: path.join(__dirname, 'node_modules'),
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: './src',
        postcss: {
          defaults: [
            cssnext({
              browsers: ['last 2 version']
            }),
            rucksack({
              autoprefixer: false
            }),
          ]
        }
      }
    })
  ]
};

if (NODE_ENV !== DEV) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings    : false,
                drop_console: true,
                unsafe      : true
            }
        })
    )
}

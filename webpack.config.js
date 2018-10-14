const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const babelConfig = {
  mode: 'production',
  entry: {
    main: './index.mjs'
  },
  output: {
    filename: 'babel.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

const babelUglifyConfig = {
  mode: 'production',
  entry: {
    main: './index.mjs'
  },
  output: {
    filename: 'babel-uglify.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          properties: {
            debug: false,
            regex: /^_/
          }
        }
      }
    })]
  }
};

const babelTerserConfig = {
  mode: 'production',
  entry: {
    main: './index.mjs'
  },
  output: {
    filename: 'babel-terser.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      terserOptions: {
        mangle: {
          properties: {
            debug: false,
            regex: /^_/
          }
        }
      }
    })]
  }
};

const bubleConfig = {
  mode: 'production',
  entry: {
    main: './index.mjs'
  },
  output: {
    filename: 'buble.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['buble-loader']
      }
    ]
  }
};

const bubleUglifyConfig = {
  mode: 'production',
  entry: {
    main: './index.mjs'
  },
  output: {
    filename: 'buble-uglify.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['buble-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          properties: {
            debug: false,
            regex: /^_/
          }
        }
      }
    })]
  }
};

module.exports = [babelConfig, babelUglifyConfig, babelTerserConfig/*, bubleConfig, bubleUglifyConfig*/];

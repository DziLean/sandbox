const webpack = require('webpack');

module.exports = new webpack.ProvidePlugin({
  React: 'react',
  ReactDOM: 'react-dom',
  Redux: 'redux',
  ReduxReact: 'redux-react',
});

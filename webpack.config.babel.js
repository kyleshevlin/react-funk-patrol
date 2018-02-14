import { join } from 'path'

const context = join(__dirname, 'src')

export default {
  context,
  entry: './index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'react-funk-patrol'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context
      }
    ]
  }
}

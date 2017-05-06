import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const app = express();
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
const selectMenu = require('./public/src/mongo/menu/selectMenu');
const selectRecipe = require('./public/src/mongo/recipe/selectRecipe');

app.use('/selectMenu', selectMenu.findAll);
// app.use('/selectRecipe/:sort', selectRecipe.findBySort);
app.use('/selectRecipe/1', selectRecipe.findById);

app.use(express.static('public'));

app.get('/', (res, req)=> {
  req.send('abc');
});

app.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});
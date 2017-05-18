
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
   context : __dirname + '/app',
   entry : './index.js',
   output : {
      path : __dirname + '/app', 
      filename : 'boundle.js'
   },
   plugins: [
     new UglifyJSPlugin()
   ]
}
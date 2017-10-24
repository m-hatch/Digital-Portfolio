## Dependencies
npm install --save-dev webpack webpack-dev-server
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
npm install --save-dev mocha chai
npm install --save-dev jsdom@8.0.4
npm install --save immutable
npm install --save-dev chai-immutable
npm install --save react react-dom
npm install --save-dev react-hot-loader
npm install --save-dev json-loader
npm install --save-dev css-loader node-sass sass-loader
npm install --save-dev postcss-loader
npm install --save-dev autoprefixer 
npm install --save-dev extract-text-webpack-plugin
#npm install --save-dev image-webpack-loader
npm install --save-dev file-loader
npm install --save-dev url-loader
npm install --save redux
npm install --save react-redux
npm install --save core-js
npm install --save whatwg-fetch
## in /api/
npm install --save compression
npm install --save helmet

## Run the Development Server
webpack-dev-server
#node_modules/.bin/webpack-dev-server

## Run production build
webpack -p

## Run tests
npm run test
const path = require('path');

const config = {
  name: 'main',
  entry: [
    './source/js/accordion.js',
    './source/js/add-cart-popup.js',
    './source/js/menu.js',
    './source/js/filter-popup.js',
    './source/js/login-popup.js',
    './source/js/slider-product.js',
    './source/js/slider-popular.js',
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'source/js'),
    iife: false,
  },
  devtool: false,

};

const vendor = {
  name: 'vendors',
  entry: './source/js/vendors/swiper-bundle.min.js',
  output: {
    filename: 'vendors.js',
    path: path.resolve(__dirname, 'source/js'),
    iife: false,
  },
  devtool: false
};

module.exports =  [config, vendor];


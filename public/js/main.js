require.config({
  urlArgs: 'v=0.1',
  paths: {
    jquery: 'libs/jquery/jquery',
    storage: 'libs/jquery/storage',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    templates: '../templates',
    bootstrap: 'bootstrap',
    growl: 'growl',
    cropper: 'libs/cropper/cropper',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery': {
      exports: '$'
    },
    'storage': {
      deps: ['jquery'],
      exports: '$'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: '$'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require([
  'jquery',
  'storage',
  'underscore',
  'backbone',
  'router',
  'bootstrap'
],
  function ($, storage, _, Backbone, Router, Bootstrap) {
    router = new Router();
    Backbone.history.start();
  }
);

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var React = require('react');
var PostsController = require('./controllers/PostsController');
var NavComponent = require('./components/NavComponent');

var Application = Backbone.Router.extend({
  controllers: {},

  initialize: function() {
    this.insertNav();
    this.controllers.posts = new PostsController({router: this});
    Backbone.history.start();
  },

  insertNav: function() {
    var NavView = React.createFactory(NavComponent);
    React.render(NavView({ collection: this.collection }), $('#nav')[0]);
  }
});

new Application();

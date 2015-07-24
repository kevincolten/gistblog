var Backbone = require('backbone');
var React = require('react');
require('backbone.controller');
var PostComponent = require('../components/PostComponent');
var PostsListComponent = require('../components/PostsListComponent');
var PostsCollection = require('../collections/PostsCollection');
var PostModel = require('../models/PostModel');
var $ = require('jquery');

module.exports = Backbone.Controller.extend({
  routes: {
    '': 'index',
    '/': 'index',
    'posts/:id': 'show',
    'posts': 'index',
  },

  initialize: function() {
    this.collection = new PostsCollection();
  },

  index: function() {
    this.collection.fetch();
    React.render(<PostsListComponent collection={this.collection} />, $('#content')[0]);
  },

  show: function(id) {
    var post = this.collection.get(id);
    if (!post) {
      post = new PostModel({ id: id });
    }
    post.fetch();
    React.render(<PostComponent model={post} />, $('#content')[0]);
  }
});

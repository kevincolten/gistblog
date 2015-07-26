var Backbone = require('backbone');
var CommentModel = require('../models/CommentModel');

module.exports = Backbone.Collection.extend({
  url: 'https://api.github.com/gists/',
  model: CommentModel
});

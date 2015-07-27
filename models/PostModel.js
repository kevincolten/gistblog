var Backbone = require('backbone');
require('backbone-relational');
var marked = require('marked');
var CommentsCollection = require('../collections/CommentsCollection');

module.exports = Backbone.Model.extend({
  urlRoot: 'https://api.github.com/gists/',
  idAttribute: 'id',

  defaults: {
    post_comments: new CommentsCollection()
  },

  parse: function(model)
  {
    model.description = model.description.replace("@post ", "");
    var content = model.files[Object.keys(model.files)[0]].content
    if (content) {
      marked.setOptions({
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
      model.content = marked(content, { sanitize: true });
    }
    return model;
  }
});

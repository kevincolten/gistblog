var Backbone = require('backbone');
require('backbone-relational');
var marked = require('marked');

module.exports = Backbone.Model.extend({
  url: 'https://api.github.com/gists/{gist_id}/comments',
  idAttribute: 'id',

  parse: function(model) {
    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
    model.body = marked(model.body, { sanitize: true });
    return model;
  }
});

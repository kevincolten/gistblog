var Backbone = require('backbone');
var marked = require('marked');

module.exports = Backbone.Model.extend({
  urlRoot: 'https://api.github.com/gists/',
  idAttribute: 'id',

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

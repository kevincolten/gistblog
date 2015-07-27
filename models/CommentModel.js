var Backbone = require('backbone');
require('backbone-relational');
var marked = require('marked');

module.exports = Backbone.Model.extend({
  url: 'https://api.github.com/gists/{gist_id}/comments',
  idAttribute: 'id'
});

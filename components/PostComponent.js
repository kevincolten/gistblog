var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var CommentsListComponent = require('./CommentsListComponent');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function() {
    var comments = this.state.model.post_comments;
    return (
      <div>
        <h1>{this.state.model.description}</h1>
        <p dangerouslySetInnerHTML={{__html: this.state.model.content}}></p>
        <CommentsListComponent collection={comments} post={this.state.model} />
      </div>
    );
  }
});

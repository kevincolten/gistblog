var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');
var PostItemComponent = require('./PostItemComponent');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var postItems = this.state.collection.map(function(postItem) {
      return <PostItemComponent model={postItem} />
    });

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
});

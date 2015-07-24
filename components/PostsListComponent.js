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
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <h3>Posts</h3>
          </div>
        </div>
        {postItems}
      </div>
    );
  }
});

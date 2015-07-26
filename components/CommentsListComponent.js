var Backbone = require('backbone');
var React = require('react');
var _ = require('underscore');
require('backbone-react-component');
var CommentItemComponent = require('./CommentItemComponent');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var commentItems = this.props.collection.map(function (commentItem) {
      return <CommentItemComponent model={commentItem} />
    });

    return (
      <div>
        <h3>Comments</h3>
        <ul>
          {commentItems}
        </ul>
      </div>
    );
  }
});

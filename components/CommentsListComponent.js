var Backbone = require('backbone');
var React = require('react');
var _ = require('underscore');
require('backbone-react-component');
var CommentItemComponent = require('./CommentItemComponent');
var CommentModel = require('../models/CommentModel');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var commentItems = this.props.collection.map(function (commentItem) {
      return <CommentItemComponent model={commentItem} />
    });

    return (
      <div>
        <h3>Comments</h3>
        <h6><a href={this.props.post.html_url}>Leave one</a></h6>
        <ul>
          {commentItems}
        </ul>
      </div>
    );
  }
});

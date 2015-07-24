var Backbone = require('backbone')
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function () {
    return (
      <div>
        <h3>
          <a href={ "#posts/" + this.props.model.id}>{this.props.model.description}</a>
        </h3>
      </div>
    );
  }
});

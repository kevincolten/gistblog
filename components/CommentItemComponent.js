var Backbone = require('backbone')
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function ()
  {
    return (
      <li>{this.props.model.get('body')}</li>
    );
  }
});

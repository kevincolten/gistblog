var Backbone = require('backbone')
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function ()
  {
    return (
      <li>
        <p dangerouslySetInnerHTML={{__html: this.props.model.get('body')}}></p>
      </li>
    );
  }
});

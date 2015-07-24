var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function() {
    return (
      <div>
        <h1>{this.state.model.description}</h1>
        <p dangerouslySetInnerHTML={{__html: this.state.model.content}}></p>
      </div>
    );
  }
});

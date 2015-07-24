var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');
var moment = require('moment');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function () {
    return (
      <div className="row">
        <div className="twelve columns">
            <h6>{ moment(this.props.model.created_at).format("MMM Do, YYYY") }</h6>
            <h5>
              <a href={ "#posts/" + this.props.model.id}>{this.props.model.description}</a>
            </h5>
        </div>
      </div>
    );
  }
});

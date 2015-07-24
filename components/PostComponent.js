var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');
var moment = require('moment');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return (
      <div className="container">
        <div className="row">
            <div className="twelve columns">
              <h3>{this.state.model.description}</h3>
              <h6>{ moment(this.state.model.created_at).format("MMM Do, YYYY") }</h6>
            </div>
        </div>
        <div className="row">
            <div className="twelve columns">
                <div dangerouslySetInnerHTML={{__html: this.state.model.content}}></div>
            </div>
        </div>
      </div>
    );
  }
});

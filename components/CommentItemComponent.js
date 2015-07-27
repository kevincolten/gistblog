var Backbone = require('backbone')
var React = require('react');
require('backbone-react-component');
var moment = require('moment');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function ()
  {
    return (
      <li>
        <span>
          On {moment(this.props.model.get('created_at')).format('MMMM Do YYYY, h:mm a')}
          , <a href={this.props.model.get('user').html_url}>{this.props.model.get('user').login}</a> wrote:
        </span>
        <span dangerouslySetInnerHTML={{__html: this.props.model.get('body')}}></span>
      </li>
    );
  }
});

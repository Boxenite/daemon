var App, Navigation, React, RouteHandler, Router, request;

Router = require('react-router');

React = Router.React;

RouteHandler = Router.RouteHandler;

Navigation = Router.Navigation;

request = require('request-promise');

module.exports = App = React.createClass({
  getInitialState: function() {
    return {
      dir: ''
    };
  },
  mixins: [Navigation],
  signIn: function(data) {
    return request({
      uri: this.props.server_url + "/users/sign_in",
      method: 'POST',
      body: data,
      json: true
    }).then((function(_this) {
      return function(resp) {
        return _this.transitionTo('setup');
      };
    })(this))["catch"](function(err) {
      return alert('Wrong email or password');
    });
  },
  listen: function(dir) {
    this.setState({
      dir: dir
    });
    return this.transitionTo('listener');
  },
  render: function() {
    return React.createElement(RouteHandler, React.__spread({
      "onSignIn": this.signIn,
      "onListen": this.listen,
      "dir": this.state.dir
    }, this.props));
  }
});

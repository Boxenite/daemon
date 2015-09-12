var Auth, React, Router;

Router = require('react-router');

React = Router.React;

module.exports = Auth = React.createClass({
  getInitialState: function() {
    return {};
  },
  changeEmail: function(e) {
    return this.setState({
      email: e.target.value
    });
  },
  changePassword: function(e) {
    return this.setState({
      password: e.target.value
    });
  },
  submit: function(e) {
    var data;
    e.preventDefault();
    data = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };
    return this.props.onSignIn(data);
  },
  render: function() {
    return React.createElement("div", {
      "className": 'container'
    }, React.createElement("div", {
      "className": 'logo row'
    }, React.createElement("div", {
      "className": 'col s8'
    }, React.createElement("img", {
      "className": 'responsive-img',
      "src": 'img/logo.png'
    }))), React.createElement("form", {
      "onSubmit": this.submit
    }, React.createElement("div", {
      "className": 'row'
    }, React.createElement("div", {
      "className": 'input-field'
    }, React.createElement("input", {
      "placeholder": 'Email',
      "type": 'text',
      "value": this.state.email,
      "onChange": this.changeEmail
    }))), React.createElement("div", {
      "className": 'row'
    }, React.createElement("div", {
      "className": 'input-field'
    }, React.createElement("input", {
      "placeholder": 'Password',
      "type": 'password',
      "value": this.state.password,
      "onChange": this.changePassword
    }))), React.createElement("div", {
      "className": 'row center-align'
    }, React.createElement("div", {
      "className": 'input-field'
    }, React.createElement("button", {
      "className": "waves-effect waves-light btn-large"
    }, "Sign in")))));
  }
});

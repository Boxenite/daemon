var React, Router, Setup;

Router = require('react-router');

React = Router.React;

module.exports = Setup = React.createClass({
  getInitialState: function() {
    return {
      dir: '/Users/domas/Developer/boxenite/menubar-app-osx/src'
    };
  },
  changeDir: function(e) {
    return this.setState({
      dir: e.target.value
    });
  },
  listen: function(e) {
    e.preventDefault();
    return this.props.onListen(this.state.dir);
  },
  render: function() {
    return React.createElement("div", {
      "className": 'container'
    }, React.createElement("div", {
      "className": 'boxenite-logo row'
    }, React.createElement("div", {
      "className": 'col s12'
    }, "Boxenite")), React.createElement("form", {
      "onSubmit": this.listen
    }, React.createElement("div", {
      "className": 'row'
    }, React.createElement("div", {
      "className": 'col s12'
    }, React.createElement("div", {
      "className": 'input-field'
    }, React.createElement("input", {
      "placeholder": 'Dir to listen',
      "type": 'text',
      "value": this.state.dir,
      "onChange": this.changeDir
    })))), React.createElement("div", {
      "className": 'row center-align'
    }, React.createElement("div", {
      "className": 'col s12'
    }, React.createElement("div", {
      "className": 'input-field'
    }, React.createElement("button", {
      "className": "waves-effect waves-light btn-large"
    }, "Listen for changes"))))));
  }
});

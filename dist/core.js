var App, Auth, Core, Listener, React, Redirect, Route, Router, Setup;

Router = require('react-router');

React = Router.React;

Route = Router.Route;

Redirect = Router.Redirect;

App = require('./app');

Setup = require('./setup');

Auth = require('./auth');

Listener = require('./listener');

module.exports = window.Core = Core = (function() {
  function Core() {
    this.server_url = 'http://www.boxenite.com';
  }

  Core.prototype.load = function() {
    return Router.run(this.routes(), (function(_this) {
      return function(Handler) {
        return React.render(React.createElement(Handler, {
          "server_url": _this.server_url
        }), document.body);
      };
    })(this));
  };

  Core.prototype.routes = function() {
    return React.createElement(Route, {
      "handler": App,
      "path": '/'
    }, React.createElement(Route, {
      "name": 'setup',
      "path": '/setup',
      "handler": Setup
    }), React.createElement(Route, {
      "name": 'auth',
      "path": '/auth',
      "handler": Auth
    }), React.createElement(Route, {
      "name": 'listener',
      "path": '/listener',
      "handler": Listener
    }), React.createElement(Redirect, {
      "from": '',
      "to": '/auth'
    }));
  };

  return Core;

})();

new Core().load();

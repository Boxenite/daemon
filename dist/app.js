var App, React, Setup, _, ipc, request;

React = require('react');

_ = require('lodash');

ipc = require('ipc');

request = require('request-promise');

App = React.createClass({
  getInitialState: function() {
    return {
      logs: []
    };
  },
  componentDidMount: function() {
    ipc.on('file-change', (function(_this) {
      return function(event_data) {
        var updated_logs;
        console.log(event_data);
        updated_logs = _this.state.logs;
        updated_logs.push(event_data);
        return _this.setState({
          logs: updated_logs
        });
      };
    })(this));
    return ipc.send('start-listening-to-dir', {
      dir: this.props.dir
    });
  },
  render: function() {
    return React.createElement("div", {
      "className": 'container'
    }, React.createElement("div", {
      "className": 'row events'
    }, React.createElement("div", {
      "className": 'col s12'
    }, React.createElement("div", {
      "className": 'event'
    }, React.createElement("div", {
      "className": 'event-label'
    }, "Listening to:"), React.createElement("div", null, this.props.dir)), _.map(this.state.logs, function(log) {
      return React.createElement("div", {
        "className": 'event'
      }, React.createElement("div", {
        "className": 'event-label'
      }, "File Change at"), React.createElement("div", null, log.path));
    }))));
  }
});

Setup = React.createClass({
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
    return React.render(React.createElement(App, {
      "dir": this.state.dir
    }), document.body);
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

React.render(React.createElement(Setup, null), document.body);

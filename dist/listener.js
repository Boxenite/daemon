var Listener, React, Router, _, ipc, request;

Router = require('react-router');

React = Router.React;

_ = require('lodash');

ipc = require('ipc');

request = require('request-promise');

module.exports = Listener = React.createClass({
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

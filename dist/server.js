var Server, bodyParser, express, request;

express = require('express');

request = require('request-promise');

bodyParser = require('body-parser');

module.exports = Server = (function() {
  function Server(server_url) {
    this.server_url = server_url;
  }

  Server.prototype.run = function() {
    var app;
    app = express();
    app.use(bodyParser.json());
    app.post('/command', (function(_this) {
      return function(req, res) {
        return _this.commandToBackend(req.body).then(function(resp) {
          return function() {
            return res.send('OK');
          };
        })["catch"](function(err) {
          res.send('ERROR');
          console.log(err);
          return alert('Was not able to send your command');
        });
      };
    })(this));
    return app.listen(2015);
  };

  Server.prototype.commandToBackend = function(command_obj) {
    return request({
      uri: this.server_url + "/command_line",
      method: 'POST',
      body: command_obj,
      json: true
    });
  };

  return Server;

})();

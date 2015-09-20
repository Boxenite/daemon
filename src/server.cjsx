express = require('express')
request = require 'request-promise'
bodyParser = require('body-parser')

module.exports =
class Server
  constructor: (@server_url) ->

  run: ->
    app = express()
    app.use(bodyParser.json())

    app.post '/command', (req, res) =>
      @commandToBackend(req.body).then((resp) => ->
        res.send('OK')
      ).catch (err) ->
        res.send('ERROR')
        console.log(err)
        alert('Was not able to send your command')

    app.listen(2015)

  commandToBackend: (command_obj) ->
    request(uri: "#{@server_url}/command_line", method: 'POST', body: command_obj, json: true)

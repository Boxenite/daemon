Router = require 'react-router'
React = Router.React
_ = require('lodash')
ipc = require('ipc')
request = require('request-promise')

Server = require './server'

module.exports =
Listener = React.createClass
  getInitialState: ->
    logs: []
  componentDidMount: ->
    ipc.on 'file-change', (event_data) =>
      console.log(event_data)
      updated_logs = @state.logs
      updated_logs.push(event_data)
      @setState(logs: updated_logs)

    ipc.send('start-listening-to-dir', dir: @props.dir)

    new Server(@props.server_url).run()
  render: ->
    <div className='container'>
      <div className='row events'>
        <div className='col s12'>
          <div className='event'>
            <div className='event-label'>
              Listening to:
            </div>
            <div>
              {@props.dir}
            </div>
          </div>
          {_.map @state.logs, (log) ->
            <div className='event'>
              <div className='event-label'>
                File Change at
              </div>
              <div>
                {log.path}
              </div>
            </div>
          }
        </div>
      </div>
    </div>

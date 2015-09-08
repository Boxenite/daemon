React = require('react')
_ = require('lodash')
ipc = require('ipc')
request = require('request-promise')

App = React.createClass
  getInitialState: ->
    logs: []
  componentDidMount: ->
    ipc.on 'file-change', (event_data) =>
      console.log(event_data)
      updated_logs = @state.logs
      updated_logs.push(event_data)
      @setState(logs: updated_logs)

    ipc.send('start-listening-to-dir', dir: @props.dir)
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

Setup = React.createClass
  getInitialState: ->
    dir: '/Users/domas/Developer/boxenite/menubar-app-osx/src'
  changeDir: (e) ->
    @setState(dir: e.target.value)
  listen: (e) ->
    e.preventDefault()
    React.render(<App dir={@state.dir} />, document.body)

  render: ->
    <div className='container'>
      <div className='boxenite-logo row'>
        <div className='col s12'>
          Boxenite
        </div>
      </div>

      <form onSubmit={@listen}>
        <div className='row'>
          <div className='col s12'>
            <div className='input-field'>
              <input placeholder='Dir to listen' type='text' value={@state.dir} onChange={@changeDir}/>
            </div>
          </div>
        </div>

        <div className='row center-align'>
          <div className='col s12'>
            <div className='input-field'>
              <button className="waves-effect waves-light btn-large">Listen for changes</button>
            </div>
          </div>
        </div>
      </form>
    </div>

React.render(<Setup/>, document.body)

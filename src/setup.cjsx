Router = require 'react-router'
React = Router.React

module.exports =
Setup = React.createClass
  getInitialState: ->
    dir: '/Users/domas/Developer/boxenite/menubar-app-osx/src'
  changeDir: (e) ->
    @setState(dir: e.target.value)
  listen: (e) ->
    e.preventDefault()
    @props.onListen(@state.dir)

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

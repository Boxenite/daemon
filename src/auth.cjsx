Router = require 'react-router'
React = Router.React

module.exports =
Auth = React.createClass
  getInitialState: ->
    {}
  changeEmail: (e) ->
    @setState(email: e.target.value)
  changePassword: (e) ->
    @setState(password: e.target.value)

  submit: (e) ->
    e.preventDefault()

    data =
      user:
        email: @state.email
        password: @state.password

    @props.onSignIn(data)

  render: ->
    <div className='container'>
      <div className='logo row'>
        <div className='col s8'>
          <img className='responsive-img' src='img/logo.png' />
        </div>
      </div>

      <form onSubmit={@submit}>
        <div className='row'>
          <div className='input-field'>
            <input placeholder='Email' type='text' value={@state.email} onChange={@changeEmail}/>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input placeholder='Password' type='password' value={@state.password} onChange={@changePassword}/>
          </div>
        </div>

        <div className='row center-align'>
          <div className='input-field'>
            <button className="waves-effect waves-light btn-large">Sign in</button>
          </div>
        </div>
      </form>
    </div>

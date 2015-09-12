Router = require 'react-router'
React = Router.React
RouteHandler = Router.RouteHandler
Navigation = Router.Navigation

request = require 'request-promise'

module.exports =
App = React.createClass
  getInitialState: ->
    dir: ''
  mixins: [Navigation]
  signIn: (data) ->
    request(uri: "#{@props.server_url}/users/sign_in", method: 'POST', body: data, json: true).then((resp) =>
      @transitionTo('setup')
    ).catch (err) ->
      alert('Wrong email or password')

  listen: (dir) ->
    @setState(dir: dir)
    @transitionTo('listener')

  render: ->
    <RouteHandler
      onSignIn={@signIn}
      onListen={@listen}
      dir={@state.dir}
      {...@props}
    />

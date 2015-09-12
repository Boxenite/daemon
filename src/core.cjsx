Router = require 'react-router'
React = Router.React

Route = Router.Route
Redirect = Router.Redirect

App = require './app'
Setup = require './setup'
Auth = require './auth'
Listener = require './listener'

module.exports =
window.Core =
class Core
  constructor: ->
    @server_url = 'http://www.boxenite.com'

  load: ->
    Router.run @routes(), (Handler) =>
      React.render(<Handler server_url={@server_url}/>, document.body)

  routes: ->
    <Route handler={App} path='/'>
      <Route name='setup' path='/setup' handler={Setup} />
      <Route name='auth' path='/auth' handler={Auth} />
      <Route name='listener' path='/listener' handler={Listener} />
      <Redirect from='' to='/auth' />
    </Route>
    # <DefaultRoute handler={Home} />
    # <Route name="about" handler={About} />
    # <Route name="users" handler={Users}>
    #   <Route name="recent-users" path="recent" handler={RecentUsers} />
    #   <Route name="user" path="/user/:userId" handler={User} />
    #   <NotFoundRoute handler={UserRouteNotFound}/>
    # </Route>
    # <NotFoundRoute handler={NotFound}/>
    # <Redirect from="company" to="about" />

new Core().load()

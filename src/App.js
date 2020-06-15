import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ChatPage from './components/ChatPage'
//import { isAuthenticated } from './auth'

const App = () => (

  <div className="App">

    <Switch>
      <Route exact path='/' component={LoginForm} />
      <Route path='/chat' component={ChatPage} />
      <Route path='/*' component={ChatPage} />
    </Switch>

  </div>
)

export default App

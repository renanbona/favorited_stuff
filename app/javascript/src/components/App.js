import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListThing from './ListThing/ListThings'
import Thing from './Thing/Thing'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ListThing} />
      <Route exact path="/things/:slug" component={Thing} />
    </Switch>
  )
}

export default App;
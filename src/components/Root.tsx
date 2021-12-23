import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/Main'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Redirect to='/login' />
      </Switch>
    </BrowserRouter>
  )
}

Root.propTypes = {

}

export default Root

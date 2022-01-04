import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { routes } from '../routes'
import Nav from './Nav/Main'

const Root = () => {
  return (
    <HashRouter>
      <Nav>
        <Switch>
          {routes}
          <Redirect to='/homePage'/>
        </Switch>
      </Nav>
    </HashRouter>
  )
}

Root.propTypes = {

}

export default Root

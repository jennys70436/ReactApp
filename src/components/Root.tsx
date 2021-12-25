import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { routes } from '../routes'
import _ from 'lodash'

const Root = () => {
  return (
    <HashRouter>
      <Switch>
        {routes}
        <Redirect to='/login'/>
      </Switch>
    </HashRouter>
  )
}

Root.propTypes = {

}

export default Root

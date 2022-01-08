import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { routes } from '../routes'
import PageLayout from './PageLayout/Main'

const Root = () => {
  return (
    <HashRouter>
      <PageLayout>
        <Switch>
          {routes}
          <Redirect to='/homePage'/>
        </Switch>
      </PageLayout>
    </HashRouter>
  )
}

Root.propTypes = {

}

export default Root

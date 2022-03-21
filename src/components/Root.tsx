import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { routes } from '../routes'
import PageLayout from './Share/PageLayout/PageLayout'
import Modal from './Share/MessageBox/MessageBox'
import ScrollToTop from './Share/ScrollToTop/ScrollToTop'

const Root = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <PageLayout>
        <Switch>
          {routes}
          <Redirect to='/homePage'/>
        </Switch>
      </PageLayout>
      <Modal/>
    </HashRouter>
  )
}

Root.propTypes = {

}

export default Root

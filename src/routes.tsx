import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router-dom'

const configs = require.context('./components/', true, /.\/config\.tsx$/)
const routeConfigs = _(configs.keys()).map(key => configs(key)).map('route').value()

function createRoutes () {
  return (
    _.map(routeConfigs, (route, i) => {
      return (
      <Route
          key={i}
          path={route.path}
          render={(props) => <route.component {...props} />}
        />
      )
    })
  )
}
export const routes = createRoutes()

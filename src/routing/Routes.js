import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard'
import NotFound from '../components/layout/NotFound'

const Routes = () => (
    <Switch>
        <Route to='/' exact={true} component={Dashboard}/>
        <Route component={NotFound} />
    </Switch>
)

export default Routes
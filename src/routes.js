import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home'
import Painel from './pages/Painel'

import { autenticado } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        )
    )} />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact redirect="/" component={ Home } />
                <PrivateRoute exact redirect="/painel" component={ Painel } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import People from './pages/cadastro';
import Detail from './pages/people';
import Edit from './pages/peopleedit';
import Login from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/people" component={Main} />
            <Route exact path="/people/cadastro" component={People} />
            <Route exact path="/people/:id" component={Detail} />
            <Route exact path="/peoplechange/:id" component={Edit} />
            <Route exact path="/" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
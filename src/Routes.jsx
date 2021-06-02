import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

const Routes = () => (
    <Switch>
        <Route path="/:slug" exact>
            <CountryDetails />
        </Route>
        <Route path="/" exact>
            <Home />
        </Route>
    </Switch>
)

export default Routes

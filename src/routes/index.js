import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Comics from '../pages/comics';
import Characters from '../pages/characters';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Comics />
            </Route>
            <Route path="/characters">
                <Characters />
            </Route>
        </Switch>
    );
}
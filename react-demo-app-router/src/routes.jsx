// routes.jsx
import React from 'react'
import App from './App'

import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';


import Home from './screens/Home';
import About from './screens/About';
import Messages from './screens/Messages';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
    </App>
);

export default Routes;
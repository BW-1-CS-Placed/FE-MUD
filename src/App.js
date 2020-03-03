import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
//import client login component
//import client register component
import Navbar from './components/navBar/Navbar';
import './App.css';

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                APP.js
                <Switch>
                    <Route exact path='/' component={ClientLogin} />
                    <Route
                        exact
                        path='/register'
                        component={ClientRegistration}
                    />
                    <Route exact path='/game' component={World} />
                </Switch>
            </div>
        </Fragment>
    );
};

export default App;

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
//import client login component
import Login from './components/Login/Login';
//import client register component
import Register from './components/Register/Register';
import Navbar from './components/navBar/Navbar';
import './App.css';

// change components dependent on merge
const App = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                APP.js
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    {/* <Route exact path='/game' component={World} />  */}
                </Switch>
            </div>
        </Fragment>
    );
};

export default App;

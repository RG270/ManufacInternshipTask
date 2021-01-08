/* eslint-disable react/jsx-no-undef */
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react'
import signup from './components/signup'
import login from './components/login'
import userpage from './components/userpage'

class Main extends Component {
    render() {
        return (
            // Different routing depends on the URL.
            <BrowserRouter>
            <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/signup' component={signup}></Route>
                <Route exact path='/' component={login}></Route>
                <Route exact path='/userpage' component={userpage}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
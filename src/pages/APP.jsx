import React, { Component } from 'react';
import {BrowserRouter as Router, Route , Switch  } from "react-router-dom"
import Home from './Home';
import Menu from './Menu';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                       <Home/> 
                    </Route>
                    <Route path='/menu'>
                       <Menu/> 
                    </Route>
                </Switch>
                
            </Router>
        );
    }
}
 
export default App;
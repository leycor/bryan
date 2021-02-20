import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


//   Page
import MainPage from './MainPage';
import ReactPage from './ReactPage';
  

const AppRouter = () => {

    return(

        <Router>
            <div>
                <Switch>
                    <Route exact path='/'  component={ MainPage }></Route>
                    <Route exact path='/react'  component={ ReactPage }></Route>

                    <Route component={ MainPage }></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter
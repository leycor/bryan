import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
  
//   Page
import MainPage from './MainPage';
import ReactPage from './ReactPage';
  
// utils ( Link de las guias )
import { guides } from '../../utils/all-guides/guides';

// Obtengo e link de react por medio del id para luego asignarlos a mis temarios
const reactUrl = guides.find( guide => guide.id === 5).link
  

const AppRouter = () => {

    return(

        <Router>
            <Fragment>

                <Switch>
                    <Route exact path='/'  component={ MainPage }></Route>
                    <Route path={ reactUrl }  component={ ReactPage }></Route> { /* reactUrl = "/react" */}

                    <Route component={ MainPage }></Route>
                </Switch>
                
            </Fragment>
        </Router>
    );
}

export default AppRouter
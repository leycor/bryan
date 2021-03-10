import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  
  
//   Page
import MainPage from './MainPage';
import ReactPage from './ReactPage';
import GitPage from './GitPage';
import NotFound from './NotFound';
  
// utils ( Link de las guias )
import { guides } from '../../utils/all-guides/guides';

// Obtengo e link de react por medio del id para luego asignarlos a mis temarios
const reactUrl = guides.find( guide => guide.id === 5).link
const gitUrl = guides.find( guide => guide.id === 3).link
  

const AppRouter = () => {

    return(

        <Router>
            <Fragment>

                <Switch>
                    <Route exact path='/Bryan'  component={ MainPage }></Route>
                    <Route strict path={ reactUrl }  component={ ReactPage }></Route>
                    <Route strict path={ gitUrl }  component={ GitPage }></Route>

                    <Route exact path='/not-found' component={ NotFound }></Route>
                    <Redirect to='/not-found'></Redirect>
                </Switch>
                
            </Fragment>
        </Router>
    );
}

export default AppRouter
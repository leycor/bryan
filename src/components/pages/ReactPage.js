import React, { Fragment } from 'react'
import Dashboard from '../organisms/Dashboard';

// Molecules
import NavDashboard from '../organisms/NavDashboard';

// utils
import { reactGuide } from '../../utils/reactGuide';

const ReactPage = () => {

    const menuTop = [

        {id:1, linkContent:'Inicio', link:'/'},
        {id:2, linkContent:'Github', link:'/'},
        {id:3, linkContent:'Linkedin', link:'/'},
    ]

    return(
        <Fragment>
            <NavDashboard title='REACT JS' menuTop={ menuTop } menuResponsive={ reactGuide }/>
            <Dashboard menuLeft={ reactGuide } />
        </Fragment>
    );
}

export default ReactPage
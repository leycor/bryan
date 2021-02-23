import React, { Fragment } from 'react'
import Dashboard from '../navbar/Dashboard';

// Molecules
import NavDashboard from '../navbar/NavDashboard';

// utils
import { reactGuide } from '../../utils/all-guides/reactGuide';
import { menuTop } from '../../utils/menuTop';

const ReactPage = () => {

    return(
        <Fragment>
            <NavDashboard title='REACT JS' menuTop={ menuTop } menuResponsive={ reactGuide }/>
            <Dashboard menuLeft={ reactGuide } />
        </Fragment>
    );
}

export default ReactPage
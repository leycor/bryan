import React, { Fragment } from 'react'
import Dashboard from '../navbar/Dashboard';

// Molecules
import NavDashboard from '../navbar/NavDashboard';

// utils
import { gitGuide } from '../../utils/all-guides/gitGuide';
import { menuTop } from '../../utils/menuTop';

const ReactPage = () => {

    return(
        <Fragment>
            <NavDashboard title='GIT' menuTop={ menuTop } menuResponsive={ gitGuide }/>
            <Dashboard menuLeft={ gitGuide } />
        </Fragment>
    );
}

export default ReactPage
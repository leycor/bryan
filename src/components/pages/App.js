import React, { Fragment } from 'react'

// Menú de navegación
import Nav from './nav/Nav'

//Banner
// import Banner from '../banner/Banner'

// Footer
import Footer from '../footer/Footer'

// Dashboard
import Dashboard from '../dashboard/Dashboard'

const App = () => {
    return (
        <Fragment>
            <Nav />
            <Dashboard />
        </Fragment>
    )
}

export default App

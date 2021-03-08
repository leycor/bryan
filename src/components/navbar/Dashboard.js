import React from 'react'
import {    
    Switch,
    Route,
    // Redirect,
     NavLink } from 'react-router-dom'

const Dashboard = ({ menuLeft }) => {

    return(
        
        // DashBoard
        <div className='flex'>

            {/* Menú left */}
            <div className='pb-16 menu-left'>
                <ul>
                    <li>
                        {
                            menuLeft.map( ({id, temaryName, topic }) =>
                            <div key={id} className='mb-5'>

                                <p className='text-sm font-bold text-gray-700'># { temaryName }</p>
                                <ul>
                                    {
                                        topic.map( ({id, topicName, topicLink}) =>
                                            <li key={ id }className='mt-1'>
                                                <NavLink exact to={ topicLink } activeClassName='text-green-700' className='capitalize text-sm font-medium text-gray-600 hover:text-green-600'>{ topicName }</NavLink>
                                            </li>
                                        )
                                    }
                                </ul>

                            </div>
                            )
                        }

                    </li>
                </ul>
            </div>

            {/* Content Right */}
            <div className='menu-right'>
                <Switch>
                    {
                        menuLeft.map( ({ topic }) => 
                            topic.map( ({ id, topicLink, topicComponent })=> 
                                <Route key={id} exact path={ topicLink } component={ topicComponent }></Route>
                                )
                                )
                    }
                    {/* <Redirect to='/not-found'></Redirect> */}
                </Switch>
            </div>

        </div>
    );
}




export default Dashboard
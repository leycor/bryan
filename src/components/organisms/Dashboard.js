import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = ({ menuLeft }) => {

    return(
        
        // DashBoard
        <div className='flex'>

            {/* Menú left */}
            <div className='menu-left'>
                <ul>
                    <li>
                        {
                            menuLeft.map( ({id, linkContent, link, temary }) =>
                            <div key={id} className='mb-5'>

                                <NavLink exact to={ link } className='font-bold text-gray-700 hover:text-green-600'># { linkContent }</NavLink>
                                <ul>
                                    {
                                        temary.map( ({id, topic, link}) =>
                                            <li key={id}className='mt-1'>
                                                <NavLink to={link} className='uppercase text-xs font-medium text-gray-600 hover:text-green-700'>{topic}</NavLink>
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

            {/* Menú Right */}
            <div className='menu-right'>
                <div className='container mx-auto bg-red-100'>
                    Contenido
                </div>
            </div>

        </div>
    );
}


export default Dashboard
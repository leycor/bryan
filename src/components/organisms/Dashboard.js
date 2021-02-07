import React from 'react'

const Dashboard = () => {

    return(
        
        // DashBoard
        <div className='flex'>

            {/* Menú left */}
            <div className='menu-left'>
                <ul>
                    <li>
                        <a href='#d' className='font-medium hover:text-green-700'># Requisitos previos</a>
                        <ul>
                            <li className='mt-1'>
                                <a href='#d' className='ml-4 text-gray-700 hover:text-green-700'>Const & let</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Menú Right */}
            <div className='menu-right'>
                <div className='container mx-auto'>
                </div>
            </div>

        </div>
    );
}


export default Dashboard
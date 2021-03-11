import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavDashboard = ({title, menuTop, menuResponsive}) => {


    // Estado para mostrar u ocultar el menú responsivo
    const [toggleState, setToggleState] = useState(false)
    
    // Función que controla el menú responsivo
    const handleToggleResponsiveMenu = () => {
        setToggleState( !toggleState ? true : false)
    }

    return(
        <Fragment>

        {/* Menú */}
        <nav className='z-50 overflow-hidden sticky top-0 flex justify-between flex-wrap content-center  px-8 w-full h-14 bg-white border-b border-gray-300'>

            {/* Título o logo */}
            <p className='text-green-700 text-xl font-bold'>{ title }</p>

            {/* Lista de hipervinculos */}
            <div className='flex flex-wrap content-center hidden md:flex'>
                {
                    menuTop.map( ({link, linkContent,id}) =>
                    <Link key={id}  to={link} className='link-item-sm ml-3 duration-300'>{linkContent} <i className="text-xs ml-1 text-gray-500 fas fa-external-link-alt"></i></Link>
                    )
                }
            </div>
            
            {/* Boton menú responsivo */}
            <div onClick={ handleToggleResponsiveMenu } className='menu flex flex-wrap content-center  w-8 cursor-pointer md:hidden'>
                <div className="line bg-gray-600 w-full h-1"></div>
                <div className="line bg-gray-600 w-full h-1 my-1"></div>
                <div className="line bg-gray-600 w-full h-1"></div>
            </div>

        </nav>
        
        {/* Menú Responsivo */}
        <div id='responsiveMenu' className={`pb-14 overflow-auto z-40 fixed flex flex-col px-7 bg-white py-5 border-gray-300 border-r h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} md:-ml-Nmedium`} >
            
            {/* Mostrar link con iconos */}
            <div className='flex justify-center my-3'>
                <Link  to={ menuTop.find(({ id })=> id === 3).link }><i className="fab fa-linkedin text-2xl p-2 hover:text-green-700"></i></Link>
                <Link  to={ menuTop.find(({ id })=> id === 1).link }><i className="fas fa-home text-2xl p-2 hover:text-green-700"></i></Link>
                <Link  to={ menuTop.find(({ id })=> id === 2).link }><i className="fab fa-github-square text-2xl p-2 hover:text-green-700"></i></Link>

            </div>

            {/* Mostrar link del contenido de la guia */}
            {
                menuResponsive.map( ({id, temaryName, topic}) =>
                
                    <div key={id} className='mb-5'>

                        <p className='text-sm font-bold text-gray-700  mt-3'># { temaryName }</p>
                        <ul>
                            {
                                topic.map( ({id, topicName, topicLink}) =>
                                    <li key={id}className='mt-1'>
                                        <NavLink onClick={()=>setToggleState(false)} exact to={topicLink} activeClassName='text-green-700' className='capitalize text-sm font-medium text-gray-600 hover:text-green-700'>{topicName}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div> 
                
                )
                
            }
        </div>
        </Fragment>
    );
}

export default NavDashboard
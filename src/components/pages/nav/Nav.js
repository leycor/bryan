import React, { Fragment, useState } from 'react'

const Nav = () => {


    const [toggleState, setToggleState] = useState(false)
    
    const handleToggleResponsiveMenu = () => {

        setToggleState( !toggleState ? true : false)
    }

    return(
        <Fragment>

        {/* Menú */}
        <nav className='overflow-hidden sticky top-0 flex justify-between flex-wrap content-center  px-8 w-full h-14 bg-white border-b border-gray-300'>
            <div>
                <p className='text-green-700 font-sans text-lg font-bold'>BRYAN RIVAS</p>
            </div>
            <div className='flex flex-wrap content-center hidden md:flex'>
                <a href="localhost:3000" className='text-gray-900 text-sm font-medium ml-5 hover:text-green-700'>Inicio</a>
                <a href="localhost:3000" className='text-gray-900 text-sm font-medium ml-5 hover:text-green-700'>Sobre mi</a>
                <a href="localhost:3000" className='text-gray-900 text-sm font-medium ml-5 hover:text-green-700'>Contacto</a>
                <a href="localhost:3000" className='text-gray-900 text-sm font-medium ml-5 hover:text-green-700'>Habilidades</a>
                <a href="localhost:3000" className='text-gray-900 text-sm font-medium ml-5 hover:text-green-700'>Proyectos</a>
            </div>

            <div onClick={ handleToggleResponsiveMenu } className='menu flex flex-wrap content-center  w-8 cursor-pointer md:hidden'>
                <div className="line bg-gray-700 w-full h-1"></div>
                <div className="line bg-gray-700 w-full h-1 my-1"></div>
                <div className="line bg-gray-700 w-full h-1"></div>
            </div>

        </nav>
        
        {/* Responsive menú */}
        <div id='responsiveMenu' className={`fixed flex flex-col px-7 bg-white py-5 border-gray-300 border-r h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} md:-ml-Nmedium`} >
            <a href="localhost:3000" className='text-gray-700 text-base font-medium hover:text-green-700'>Guide</a>
            <a href="localhost:3000" className='text-gray-700 text-base font-medium pt-3 hover:text-green-700'>Sobre mi</a>
            <a href="localhost:3000" className='text-gray-700 text-base font-medium pt-3 hover:text-green-700'>Contacto</a>
            <a href="localhost:3000" className='text-gray-700 text-base font-medium pt-3 hover:text-green-700'>Habilidades</a>
            <a href="localhost:3000" className='text-gray-700 text-base font-medium pt-3 hover:text-green-700'>Proyectos</a>
        </div>

        <div className='mt-10 container mx-auto px-10'>
        </div>
        </Fragment>
    );
}

export default Nav
import React, { Fragment, useState } from 'react'

const Nav = ({title, mainMenu}) => {


    const [toggleState, setToggleState] = useState(false)
    
    const handleToggleResponsiveMenu = () => {

        setToggleState( !toggleState ? true : false)
    }

    return(
        <Fragment>

        {/* Menú */}
        <nav className='z-50 overflow-hidden sticky top-0 flex justify-between flex-wrap content-center  px-8 w-full h-14 bg-white border-b border-gray-300'>
            <div>
                <p className='text-green-700 font-neucha tracking-wider text-xl font-bold'>{ title }</p>
            </div>
            <div className='flex flex-wrap content-center hidden md:flex'>
                {
                    mainMenu.map( ({link, linkContent}) => <a href={link} className='link-item-sm ml-3'>{linkContent}</a>)
                }
            </div>

            <div onClick={ handleToggleResponsiveMenu } className='menu flex flex-wrap content-center  w-8 cursor-pointer md:hidden'>
                <div className="line bg-gray-600 w-full h-1"></div>
                <div className="line bg-gray-600 w-full h-1 my-1"></div>
                <div className="line bg-gray-600 w-full h-1"></div>
            </div>

        </nav>
        
        {/* Responsive menú */}
        <div id='responsiveMenu' className={`z-40 fixed flex flex-col px-7 bg-white py-5 border-gray-300 border-r h-screen w-64 duration-300 ${ !toggleState ? '-ml-Nmedium': null} md:-ml-Nmedium`} >
            {
                mainMenu.map( ({link, linkContent}) => <a href={link} className='link-item-base mt-3'>{linkContent}</a> )
            }
        </div>
        </Fragment>
    );
}

export default Nav
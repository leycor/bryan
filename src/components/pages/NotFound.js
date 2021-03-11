import React from 'react'

import {
  Link
} from "react-router-dom";

const NotFound = ( ) => (

    <div className='px-10 flex flex-col flex-wrap justify-center content-center text-center  h-screen text-gray-800'>
        <p className='font-bold text-7xl'>404</p>
        <p className='-mt-4 mb-3 font-bold text-xl'>PAGE NOT FOUND</p>
        <p className='mb-5 text-smt  text-gray-700 md:w-96'>La página que está intentando buscar podría haber sido eliminada, cambiada o no existe</p>
        <Link  to='/bryan/' className='p-2 border-2 border-gray-700 font-medium text-gray-700 text-smt hover:text-green-700'>PAGINA DE INICIO</Link>
    </div>
)

export default NotFound
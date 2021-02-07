import React from 'react'
import img from '../../assets/img/skin.png'


const Banner = () => {

    return(
        <div className='mx-10 grid grid-cols-1 gap-4'>

            {/* Banner */}
            <div className='-mt-12 flex flex-wrap flex-col content-center items-center justify-center h-screen'>
                <img src={ img } alt='skin' className='w-80 mb-10 ' />
                <h1 className='text-center tracking-wide text-5xl font-neucha font-bold text-gray-800 mb-8'>BRYAN RIVAS</h1>
                <button className='btn-primary'>Comenzar</button>
            </div>

            {/* Footer*/}

        </div>
    );
}

export default Banner
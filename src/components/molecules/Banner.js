import React from 'react'


const Banner = ({title, img, buttonTitle}) => {

    return(
        
        <section id='banner' className='mx-10 grid grid-cols-1 gap-4'>

            {/* Banner */}
            <div className='-mt-8 flex flex-col items-center justify-center h-screen'>
                <img src={ img } alt='skin' className='w-40 md:w-80 mb-3 md:mb-10 ' />
                <h1 className='text-center  tracking-tight text-xl md:text-5xl  font-bold text-gray-700 mb-1 md:mb-3'>{title}</h1>
                <p className='mb-4 md:mb-6  text-xl text-center text-gray-600'>Lorem Ipsum es simplemente el texto de relleno de las imprentas</p>
                <button className='btn-primary'>{buttonTitle}</button>
            </div>

        </section>
    );
}

export default Banner
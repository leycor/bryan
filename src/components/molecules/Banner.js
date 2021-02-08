import React from 'react'


const Banner = ({title, img, buttonTitle}) => {

    return(
        <section id='banner' className='mx-10 grid grid-cols-1 gap-4'>

            {/* Banner */}
            <div className='-mt-12 flex flex-wrap flex-col content-center items-center justify-center h-screen'>
                <img src={ img } alt='skin' className='w-80 mb-10 ' />
                <h1 className='text-center tracking-wide text-5xl font-neucha font-bold text-gray-800 mb-8'>{title}</h1>
                <p className='mb-8 tracking-wide font-medium text-xl text-center font-neucha text-gray-600'>Lorem Ipsum es simplemente el texto de relleno de las imprentas</p>
                <button className='btn-primary'>{buttonTitle}</button>
            </div>

            {/* Footer*/}

        </section>
    );
}

export default Banner
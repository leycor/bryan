import React from 'react'


const Services = ({services}) => {
    
    return(

    <section id='services' className='mb-10 pt-10 pb-10 mx-5 md:mx-16 border-t'>
        <p className='text-center font-bold text-2xl text-gray-700 uppercase'>Servicios</p>
        <p className='mb-16  md:mx-24 text-center mt-3 text-base mb-5 text-gray-700'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

            {
                services.map( ({id, name, description, img }) => (

                    <div key={id} className='flex item-start flex-col justify-start content-start flex-wrap p-5 w-100'>
                        <div style={{backgroundImage: `url(${img})`}} className='mb-5 mx-auto w-28 h-28 bg-no-repeat'></div>
                        <a href='#phone' className='mx-auto font-bold text-lg text-gray-700 uppercase hover:text-green-600'>{name}<i className="ml-3 text-2xl fab fa-whatsapp"></i></a>
                        <p className='text-center mx-auto md:mx-16 mt-3 text-smt mb-5 text-gray-700'>{description}</p>
                    </div>
                    
                ))
            }
        </div>

    </section>
    );
}

export default Services
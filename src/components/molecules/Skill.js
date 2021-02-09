import React, { Fragment } from 'react'

const Skill = ({guides}) => {

    return(
        <Fragment>
            <section id='guides' className='mb-10 pt-10 pb-10 mx-16 border-t duration-300'>
                <p className='text-center font-bold text-2xl text-gray-700 uppercase'>Guias</p>
                <p className='mb-16  md:mx-24 text-center mt-3 text-base mb-5 text-gray-700'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        guides.map( ({id, name, description, link, img}) => (


                                <div key={id} className='flex item-start justify-start content-start flex-wrap p-5 w-100'>
                                    <div style={{backgroundImage: `url(${img})`}} className='w-10 bg-no-repeat'></div>
                                    <a href={link} className='font-bold text-lg text-gray-700 uppercase hover:text-green-600'># {name}</a>
                                    <p className='mt-3 text-smt mb-5 text-gray-700'>{description}</p>
                                </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    );
}

export default Skill
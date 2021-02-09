import React, { Fragment } from 'react'

const Projects = ({projects}) => {

    return(
        <Fragment>
            <section id='projects' className='mb-10 pt-10 pb-10 mx-5 md:mx-16 border-t'>
                <p className='text-center font-bold text-2xl text-gray-700 uppercase'>Proyectos</p>
                <p className='mb-16  md:mx-24 text-center mt-3 text-base mb-5 text-gray-700'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        projects.map( ({id, name, description,logo, link, front, back}) => (

                            <div key={id} className='flex item-start justify-start content-start flex-wrap p-5 w-100'>
                                <div className='flex item-start flex-wrap flex-col '>
                                    <div style={{backgroundImage: `url(${logo})`}} className='h-8 bg-no-repeat mb-2'></div>
                                    <a href={link} className='font-bold text-lg text-gray-700 uppercase hover:text-green-600'>{name}</a>
                                    <a href={link} className='font-medium text-xs text-green-600 uppercase hover:text-green-700'>{link}</a>
                                </div>
                                <p className='mt-2 text-smt mb-3 text-gray-700'>{description}</p>
                                <div className='flex item-start flex-wrap flex-col '>
                                    <div>
                                        <p className='mb-1 font-bold text-xs text-gray-700 uppercase'>Frontend</p>
                                        {
                                            front.map( ({id, name}) => <div key={id} style={{backgroundImage: `url(${name})`}} className='mr-1 inline-block h-5 w-5 bg-no-repeat mb-1'></div> )
                                        }
                                    </div>
                                    {
                                        back.length > 0
                                        &&
                                        <div>
                                            <p className='mb-1 font-bold text-xs text-gray-700 uppercase'>Backend</p>
                                            {
                                                back.map( ({id,name}) => <div key={id} style={{backgroundImage: `url(${name})`}} className='mr-1 inline-block h-5 w-5 bg-no-repeat mb-1'></div> )
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    );
}

export default Projects
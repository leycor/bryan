import React, { Fragment } from 'react'
import SubTitlePage from '../atoms/SubTitlePage';

import { Link } from 'react-router-dom'

// Atoms
import TitlePage from '../atoms/TitlePage';

const Skill = ({guides}) => {

    return(
        <Fragment>
            <section id='guides' className='section-page'>
                <TitlePage title = 'Habilidades' />
                <SubTitlePage subtitle='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno' />
                

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        guides.map( ({id, name, description, link, img}) => (


                                <div key={id} className='flex flex-col p-5'>
                                    <div className='flex'>
                                        <div style={{backgroundImage: `url(${img})`}} className='w-10  bg-no-repeat'></div>
                                        <Link to={link} className='font-bold text-lg text-gray-700 uppercase hover:text-green-600'># {name} <i className="text-sm ml-2 text-gray-500 fas fa-external-link-alt"></i></Link>
                                    </div>
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
import React  from 'react'

// Atoms
import TitlePage from '../atoms/TitlePage';
import SubTitlePage from '../atoms/SubTitlePage';

import CardLogo from '../atoms/CardLogo';
import CardName from '../atoms/CardName';
import CardLink from '../atoms/CardLink';
import CardDescription from '../atoms/CardDescription';
import CardLanguage from '../atoms/CardLanguage';

const Projects = ({projects}) => {

    return(
            <section id='projects' className='section-page'>
                
                <TitlePage title='Proyectos' />

                <SubTitlePage subtitle='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno' />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {
                        projects.map( ({id, name, description,logo, link, front, back}) => (

                            <div key={id} className='flex flex-col p-5'>

                                <CardLogo logo = { logo } />
                                <CardName name= { name} />
                                <CardLink link = { link } />
                                <CardDescription description = { description } />

                                <div className='flex flex-col '>

                                    {/* Tecnologias Frontend usadas */}
                                    <CardLanguage tecnology='frontend' language={ front } />

                                    {/* Tecnologias Backend usadasa */}
                                    <CardLanguage tecnology='backend' language={ back } />

                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>
    );
}

export default Projects
import React, { Fragment, useState } from 'react'

// Organisms
import Nav from '../navbar/Nav'
import Banner from '../molecules/Banner'
import Skill from '../molecules/Skill'
import Projects from '../molecules/Projects'
import Footer from '../molecules/Footer'

// imgs
import img from './../../assets/img/skin.png'



// Object List
import { guides } from '../../utils/all-guides/guides'
import { projects } from '../../utils/projects'

const MainPage = () => {

    const [ mainMenu ] = useState(

        [
            {id: 1, linkContent: 'Inicio', link: '#banner' },
            {id: 3, linkContent: 'Habilidades', link: '#guides' },
            {id: 4, linkContent: 'Proyectos', link: '#projects' },
        ]
    )

    return(
        <Fragment>

            <Nav
                title='BRYAN RIVAS'
                mainMenu = { mainMenu }
            />
            
            <Banner
                title = 'BRYAN RIVAS'
                img = {img}
                buttonTitle= 'Curriculum'
            />

            <Skill guides={guides}/>
            <Projects projects={ projects } />

            <Footer
                title= 'Bryan Rivas Venezuela 2021. All Rights Reserved'
                linkedin= '#linkedin'
                github= '#github'
                email= 'bryanjohann1995@gmail.com'
                phone= '+58 4143378626'
            />
        </Fragment>
    );
}

export default MainPage
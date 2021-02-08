import React, { Fragment, useState } from 'react'
import Banner from '../molecules/Banner'
import Footer from '../molecules/Footer'
import Nav from '../organisms/Nav'

import img from '../../assets/img/skin.png'
import Skill from '../molecules/Skill'
import { guides } from '../../utils/guides'

const MainPage = () => {

    const [ mainMenu ] = useState(
        [
            {id: 1, linkContent: 'Inicio', link: '#banner' },
            {id: 2, linkContent: 'Sobre mi', link: '#about' },
            {id: 3, linkContent: 'Guias', link: '#guides' },
            {id: 4, linkContent: 'Proyectos', link: '#projects' },
            {id: 5, linkContent: 'Contactame', link: '#contact' },
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
                buttonTitle= 'Comenzar'
            />

            <Skill guides={guides}/>

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
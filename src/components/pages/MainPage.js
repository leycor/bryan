import React, { Fragment, useState } from 'react'
import Banner from '../molecules/Banner'
import Footer from '../molecules/Footer'
import Nav from '../organisms/Nav'

import img from '../../assets/img/skin.png'

const MainPage = () => {

    const [ mainMenu ] = useState(
        [
            {id: 1, linkContent: 'Inicio', link: '/' },
            {id: 2, linkContent: 'Sobre mi', link: '/about' },
            {id: 3, linkContent: 'Contactame', link: '/contact' },
            {id: 4, linkContent: 'Habilidades', link: '/skills' },
            {id: 5, linkContent: 'Proyectos', link: '/projects' },
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
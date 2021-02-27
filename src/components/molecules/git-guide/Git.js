import React, {Fragment} from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import ImgSection from "../../atoms/ImgSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils
import gitImg from '../../../assets/icon/git.svg'

const Git = () => {
    return (
        <Fragment>
            <div className="container mx-auto mb-10 guide-section">

                <ImgSection img={gitImg} />

                {/* Definición */}
                <SubTitleSection subTitle='INTRODUCCIÓN A GIT' />
                <DescriptionSection
                description='Es un sistema de control de versiones que nos va a servir para trabajar en equipo de una manera mucho más simple y optima.'
                />
                <DescriptionSection
                description='Con Git vamos a poder controlar todos los cambios que se hacen en nuestra aplicación y en nuestro código y vamos a tener control absoluto de todo lo que pasa en el código, pudiendo volver atrás en el tiempo, pudiendo abrir diferentes ramas de desarrollo, etc.'
                />
                <DocumentationSection link='https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Fundamentos-de-Git' />

            </div>

        </Fragment>
    )
}

export default Git

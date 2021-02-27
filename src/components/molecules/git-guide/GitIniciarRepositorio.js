import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitIniciarRepositorio = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Inicializar un repositorio' />
                <DescriptionSection
                description='Si estás empezando a seguir un proyecto existente en Git, debes ir al directorio del proyecto y usar el comando ***git init***'
                />
                <DescriptionSection
                description='Esto crea un subdirectorio nuevo llamado .git, el cual contiene todos los archivos necesarios del repositorio – un esqueleto de un repositorio de Git. Todavía no hay nada en tu proyecto que esté bajo seguimiento.'
                />

                <CodeSection
                language='bash'
                code={`
$ git init
                `} />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git' />
            </div>

    )
}

export default GitIniciarRepositorio
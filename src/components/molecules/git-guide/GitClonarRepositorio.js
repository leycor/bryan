import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitClonarRepositorio = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Clonar un repositorio' />
                <DescriptionSection
                description='Si deseas obtener una copia de un repositorio Git existente — por ejemplo, un proyecto en el que te gustaría contribuir — el comando que necesitas es ***git clone***'
                />
                <DescriptionSection
                description='Puedes clonar un repositorio con ***git clone [url]***. Por ejemplo, si quieres clonar la librería de Git llamada ***libgit2*** puedes hacer algo así'
                />

                <CodeSection
                language='bash'
                code={`
$ git clone https://github.com/libgit2/libgit2
                `} />

                <DescriptionSection
                description='>***Esto crea un directorio llamado libgit2***, inicializa un directorio .git en su interior, descarga toda la información de ese repositorio y saca una copia de trabajo de la última versión. Si te metes en el directorio libgit2, verás que están los archivos del proyecto listos para ser utilizados.'
                />

            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git' />
            </div>

    )
}

export default GitClonarRepositorio
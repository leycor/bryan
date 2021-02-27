import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitVisualizarRemoto = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Visualizar Remotos' />
                <DescriptionSection
                description='Para ver los remotos que tienes configurados, debes ejecutar el comando ***git remote***. Mostrará los nombres de cada uno de los remotos que tienes especificados. Si has clonado tu repositorio, deberías ver al menos origin (origen, en inglés) - este es el nombre que por defecto Git le da al servidor del que has clonado:'
                />
                <CodeSection
                language='bash'

                code={`
#Visualizar remotos asociados               
$ git remote -v
`} />

                <SubTitleSection subTitle='Añadir' />
                <DescriptionSection
                description='Para añadir un remoto nuevo y asociarlo a un nombre que puedas referenciar fácilmente, ejecuta:  
                ***git remote add [nombre] [url]***:'
                />

                <CodeSection
                language='bash'

                code={`
#Añadir repositorio remoto
$ git remote add origin https://github.com/leycor/nameRepository.git
`} />



            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos' />
            </div>

    )
}

export default GitVisualizarRemoto
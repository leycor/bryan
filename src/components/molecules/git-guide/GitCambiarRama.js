import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitCambiarRama = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Cambiar de rama' />
                <DescriptionSection
                description='Para saltar de una rama a otra o versiones, tienes que utilizar el comando ***git checkout***. Hagamos una prueba, saltando a la rama testing recién creada y tambien saltando a versiones de nuestra rama:'
                />

                <CodeSection
                language='bash'
                code={`
#Listar ramas disponibles
$ git branch

#Cambiar de rama
$ git checkout testing

#Cambiar de versiones en una rama
git checkout <hash>
`} />



            <DocumentationSection link='https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F' />
            </div>

    )
}

export default GitCambiarRama
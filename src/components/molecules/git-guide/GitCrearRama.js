import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitCrearRama = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Crear una Rama Nueva' />
                <DescriptionSection
                description='¿Qué sucede cuando creas una nueva rama? Bueno…​, simplemente se crea un nuevo apuntador para que lo puedas mover libremente. Por ejemplo, supongamos que quieres crear una rama nueva denominada "testing". Para ello, usarás el comando ***git branch***'
                />

                <CodeSection
                language='bash'
                code={`
$ git branch testing
`} />

                <DescriptionSection
                description='> el comando git branch solamente crea una nueva rama, ***pero no salta a dicha rama***'
                />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F' />
            </div>

    )
}

export default GitCrearRama
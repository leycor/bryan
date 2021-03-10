import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactHooksReglas = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='Reglas de los Hooks' />
                <DescriptionSection
                description='Los Hooks son funciones de JavaScript, pero necesitas seguir dos reglas cuando los uses.'
                />
                <DescriptionSection
                description='***No llames Hooks dentro de ciclos, condicionales o funciones anidadas.*** En cambio, usa siempre Hooks en el nivel superior de tu función en React, antes de cualquier retorno prematuro. Siguiendo esta regla, te aseguras de que los hooks se llamen en el mismo orden cada vez que un componente se renderiza. Esto es lo que permite a React preservar'
                />
                <DescriptionSection
                description='***No llames Hooks desde funciones JavaScript regulares.***'
                />
                

<DocumentationSection link='https://es.reactjs.org/docs/hooks-rules.html' />

            </div>

    )
}

export default ReactHooksReglas
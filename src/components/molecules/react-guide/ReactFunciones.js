import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactFunciones = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Funciones de flecha' />
                <DescriptionSection
                description='Una expresión de función flecha es una alternativa compacta a una expresión de función'
                />

                <CodeSection
                language='javascript'
                code={`
const nombreFuncion = ( parametros ) => {
    return(
        // Codigo
        );
}

// Si la función solo retornará un unico elemento podemos escribirlo de la siguiente manera:
const nombreFuncion = ( parametros ) => ( return 'Hola Mundo' )
`} />
                <DescriptionSection
                description='> Podriamos omitir tambien los parentesis y la palabra return'
                />

                <DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions' />

            </div>

    )
}

export default ReactFunciones
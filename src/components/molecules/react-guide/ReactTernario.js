import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactTernario = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Operador Ternario' />
                <DescriptionSection
                description='Se trata de otra forma de crear condicionales de una manera mas simplificada'
                />

                <CodeSection
                language='javascript'
                code={`
const activo = true;

// Condicional de dos respuesta
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

// Condicional de una respuesta
const mensaje = activo && 'Activo';
`} />
<DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator' />

            </div>

    )
}

export default ReactTernario
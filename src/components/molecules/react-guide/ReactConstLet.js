import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactConstLet = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Const Let' />
                <DescriptionSection
                description='Olvidarse del **var** La forma para declarar variables en proyectos React es utilizando **const y let**'
                />

                <CodeSection
                language='javascript'
                code={`
// Variables y Constantes
const nombre = 'Bryan';
const apellido = 'Rivas';

console.log( nombre, apellido, valorDado )
`} />
    <DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const' /><br/>
    <DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let' />

            </div>

    )
}

export default ReactConstLet

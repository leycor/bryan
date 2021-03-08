import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactTemplateString = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Template String' />
                <DescriptionSection
                description='Olvidarse del **var** La forma para declarar variables en proyectos React es utilizando **const y let**'
                />

                <CodeSection
                language='javascript'
                code={`
const nombre   = 'Fernando';
const apellido = 'Herrera';
const nombreComplteto = '$ { nombre } $ { apellido } '
                

`} />
<DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals' />

            </div>

    )
}

export default ReactTemplateString

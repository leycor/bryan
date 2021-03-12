import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactRouterInstalacion = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Instalacion' />
                <DescriptionSection
                description='Puede instalar React Router desde el registro público de npm con **`npm`** o **`yarn`**'
                />

                <CodeSection
                language='bash'
                code={`
# npm
$ npm i react-router-dom

# yarn
$ yarn add react-router-dom
`} />


    <DocumentationSection link='https://reactrouter.com/web/guides/quick-start' />

            </div>

    )
}

export default ReactRouterInstalacion
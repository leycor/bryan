import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxDependencias = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Dependencias' />
                <DescriptionSection
                description='Para trabajar con redux es necesario instalar las siguientes dependencias'
                />

                <CodeSection
                language='javascript'
                code={`
$ yarn add react-redux redux redux-devtools-extension redux-thunk

// O tambien
$ npm i react-redux redux redux-devtools-extension redux-thunk
`} />

                <SubTitleSection subTitle='redux' />
                <DescriptionSection
                description='Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones'
                />
                <DocumentationSection link='https://es.redux.js.org/' /><br /><br />

                <SubTitleSection subTitle='react-redux' />
                <DescriptionSection
                description='React Redux es la capa oficial de enlaces de la interfaz de usuario de React para Redux . Permite a sus componentes React leer datos de una tienda Redux y enviar acciones a la tienda para actualizar el estado.'
                />
                <DocumentationSection link='https://react-redux.js.org/introduction/getting-started' /><br /><br />

                <SubTitleSection subTitle='redux-thunk' />
                <DescriptionSection
                description='Libreria que te permite trabajar con funciones asincronas en redux.'
                />
                <DocumentationSection link='https://www.npmjs.com/package/redux-thunk' /><br /><br />

                <SubTitleSection subTitle='redux-devtools-extension' />
                <DescriptionSection
                description='La extensión proporciona potenciadores para su flujo de trabajo de desarrollo de Redux. Aparte de Redux, se puede usar con cualquier otra arquitectura que maneje el estado.'
                />
                
                <DocumentationSection link='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es' /><br />
                <DocumentationSection link='https://www.npmjs.com/package/redux-devtools-extension' />

            </div>

    )
}

export default ReactReduxDependencias
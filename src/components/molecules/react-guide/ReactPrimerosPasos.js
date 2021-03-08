import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactPrimerosPasos = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Crear nueva aplicación' />
                <DescriptionSection
                description='Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.'
                />

                <CodeSection
                language='bash'
                code={`
# Creas nueva estructura de carpeta para tu app 
$ npx create-react-app my-app

# Entras a la carpeta de tu proyecto
$ cd my-app

# Inicias tu app
$ npm start

# Puedes iniciar tambien tu proyecto con
$ yarn start 
`} />
                <DescriptionSection
                description='> **Create React App** configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener **Node >= 10.16** y **npm >= 5.6** instalados en tu máquina. Para crear un proyecto ejecuta:'
                />

                <DocumentationSection link='https://es.reactjs.org/docs/create-a-new-react-app.html' /><br/>
                <DocumentationSection link='https://create-react-app.dev/docs/getting-started/' /><br/>

            </div>

    )
}

export default ReactPrimerosPasos

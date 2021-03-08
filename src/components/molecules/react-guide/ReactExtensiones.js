import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactExtensiones = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='React Developer tools' />
                <DescriptionSection
                description='Es un plugins para tu navegador el cual te ayudará a visualizar los componentes con los que estes trabajando, a continuación el link para que instales este plugins en **google crhome.**'
                />

                <DocumentationSection link='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1' />

                <br /><br />
                <SubTitleSection subTitle='JSON Formatter' />
                <DescriptionSection
                description='Es un plugins para tu navegador el cual te ayudará a visualizar las peticiones http que realices en formato JSON'
                />

                <DocumentationSection link='https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=es' />

                <br/><br/>
                <SubTitleSection subTitle='EXTENSIONES DE VS CODE' />
                <CodeSection
                language='bash'
                code={`

# Permite cerrar cada etiqueta que abras de manera automatica
1- Auto Close Tag

# Asigna un color a cada una de las llaves, corchetes y parentesis para identificar bien cada bloque de codigo
2- Bracket Pair colorizer

# Snippet para escribir codigo de React de manera mas rapida
3- ES7 React/Redux/GraphQl/ReactNative
3.1 - Reactjs code snippets

# Muestra errores de sintaxis en tu editor de codigo
4- ESLint

# Formatea el codigo seleccionado para que tenga mejor visualización
5- Prettier - Code Formatter

# Nuevos iconos
6- vscode-icons

# Tener visual code en español
7- Spanisn language Pack for Visual Studio Code
`} />



            </div>

    )
}

export default ReactExtensiones
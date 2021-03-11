import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactTailwind = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Tailwind + React' />
                <DescriptionSection
                description='Comience por crear un nuevo proyecto Create React App si aún no tiene uno configurado. El enfoque más común es utilizar la aplicación Create React :'
                />

                <CodeSection
                language='bash'
                code={`
$ npx create-react-app my-project
$ cd my-project
`} />
                <SubTitleSection subTitle='Instalar Tailwind a través de npm' />
                <DescriptionSection
                description='`Tailwind CSS requiere Node.js 12.13.0 o superior.`  
                Instale Tailwind y sus dependencias entre pares usando npm:'
                />

                <CodeSection
                language='bash'
                code={`
$ npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
`} />

                <SubTitleSection subTitle='Instalar y configurar CRACO' />
                <DescriptionSection
                description='Dado que Create React App no ​​le permite anular la configuración de PostCSS de forma nativa, también necesitamos instalar CRACO para poder configurar Tailwind:'
                />

                <CodeSection
                language='bash'
                code={`
$ npm install @craco/craco
`} />

                <DescriptionSection
                description='Una vez instalado, actualice su **`scripts`** en su **`package.json`** archivo para su uso **`craco`** en lugar de **`react-scripts`** para todas las secuencias de comandos, excepto **`eject`**:'
                />

                <CodeSection
                language='json'
                code={`
{
    // ...
    "scripts": {
        // "start": "react-scripts start",
        // "build": "react-scripts build",
        // "test": "react-scripts test",
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
    },
}
`} />
                <DescriptionSection
                description='A continuación, cree un **`craco.config.js`** en la raíz de nuestro proyecto y agregue **`tailwindcss`** y **`autoprefixer`** como complementos PostCSS:'
                />

                <CodeSection
                language='javascript'
                code={`
// craco.config.js
module.exports = {
    style: {
    postcss: {
        plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ],
    },
    },
}
`} />
                <SubTitleSection subTitle='Crea tu archivo de configuración' />
                <DescriptionSection
                description='A continuación, genere su **`tailwind.config.js`** archivo:'
                />

                <CodeSection
                language='bash'
                code={`
$ npx tailwindcss init
`} />
                <DescriptionSection
                description='Esto creará un **`tailwind.config.js`** archivo mínimo en la raíz de su proyecto:'
                />
<CodeSection
                language='javascript'
                code={`
// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {},
    },
    variants: {
    extend: {},
    },
    plugins: [],
}
`} />

                <SubTitleSection subTitle='Configure Tailwind para eliminar estilos no utilizados en producción' />
                <DescriptionSection
                description='En su **`tailwind.config.js`** archivo, configure la **`purge`** opción con las rutas a todos sus componentes para que Tailwind pueda modificar los estilos no utilizados en las compilaciones de producción:'
                />
<CodeSection
                language='javascript'
                code={`
// tailwind.config.js

module.exports = {
    // purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // +
    darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {},
    },
    variants: {
    extend: {},
    },
    plugins: [],
}
`} />

                <SubTitleSection subTitle='Incluya Tailwind en su CSS' />
                <DescriptionSection
                description='Abra el **`./src/index.css`** archivo que genera **`create-react-app`** para usted por defecto y utilizar la **`@tailwind`** directiva para incluir de viento de cola base, **`component`** sy **`utilities `** estilos, en sustitución de los contenidos de los archivos originales:'
                />
<CodeSection
                language='css'
                code={`
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
`} />
                <DescriptionSection
                description='> Ahora importe este archivo en el componente raiz de react para que se apliquen los estilos, para comprobar que tailwind se instaló de manera correcta deberas crear un **`<h1></h1>`** Y comprobar que no tiene ningún tipo de estilo por defecto.'
                />

<DocumentationSection link='https://www.npmjs.com/package/gh-pages' />

            </div>

    )
}

export default ReactTailwind
import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactGitPages = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Github Pages' />
                <DescriptionSection
                description='Páginas de GitHub es un servicio de alojamiento de sitio estático que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en GitHub, opcionalmente ejecuta los archivos a través de un proceso de complilación y publica un sitio web. '
                />
                <DescriptionSection
                description='***Y para poder alojar tu proyecto en este servicio lo primero que necesitas es tener tu proyecto en git cómo publico.***'
                />

                <CodeSection
                language='bash'
                code={`
echo "# repositorio" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/leycor/k.git
$ git push -u origin main
`} />
                <SubTitleSection subTitle='Instalar módulo gh-pages' />
                <DescriptionSection
                description='Este módulo hará el despliegue del proyecto por nosotros, para instalarlo puedes utilizar **npm** o **yarn**'
                />

                <CodeSection
                language='bash'
                code={`
# Instalación con yarn
$ yarn add gh-pages

# Instalación con npm
$ npm install gh-pages
`} />

                <SubTitleSection subTitle='Utilizar gh-pages' />
                <DescriptionSection
                description='Una vez instalado el módulo **gh-pages** debemos hacer unas configuraciones para que este pueda hacer el despliegue de manera correcta'
                />

                <CodeSection
                language='json'
                code={`
{
    "name": "react-tailwind",
    "version": "0.1.0",
    "private": true,
    // Agregar una nueva propiedad "homepage" que por lo general llevará el nombre de tu repositorio 
    "homepage": "https://leycor.github.io/bryan",
    // --
    "dependencies": {
        ...
    },

    // Agregar nuevos script personalizados para el despliegue de proyecto
    "scripts": {
        "predeploy": "yarn run build", // +
        "deploy": "gh-pages -d build", // + ubica directorio para despliegue
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject"
      },
},
`} />

                <SubTitleSection subTitle='Guardar cambios y subir a github' />
                <DescriptionSection
                description='Una vez realizada la configuración se tendrán que subir dichos cambios al repositorio de github y hacer uso los script que creamos para que nuestro proyecto este alojado en los servidores de guthub pages'
                />

                <CodeSection
                language='json'
                code={`
// Guardiamos y subimos nuestros cambios
$ git add .
$ git commit -m "gh pages, agregado"

// Hacer uso del script que creamos para el deploy
$ yarn run deploy

`} />
                <DescriptionSection
                description='> Cuando tengas cómo respuesta `published` ve a tu dirección github y comprueba que ya tienes el proyecto en despliegue.'
                />
<DocumentationSection link='https://www.npmjs.com/package/gh-pages' />

            </div>

    )
}

export default ReactGitPages

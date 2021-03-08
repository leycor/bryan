import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactProgramas = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Visual Code' />
                <DescriptionSection
                description='Necesario tener un editor de codigo, en este caso te adjunto visual code, pero puedes trabajar con el que mas te guste.'
                />
                <DocumentationSection link='https://code.visualstudio.com/' /><br /> <br />

                <SubTitleSection subTitle='Instalar Node.js con Apt desde los repositorios predeterminados' />
                <DescriptionSection
                description='Esta instalación es necesaria para poder trabajar con React'
                />

                <CodeSection
                language='bash'
                code={`
$ sudo apt update

# A continuación instalar node
$ sudo apt install nodejs

# Consultar si instalamos de manera correcta 
$ nodejs -v

# Instalar administrador de paquetes
$ sudo apt install npm

# Opcional: Yarn, para instalar las dependencias
$ npm install -g yarn
# El -g es para que lo instale de manera global
`} />

<               DescriptionSection
                description='> En este momento, ha instalado correctamente Node.js y npm usando apt y los repositorios de software predeterminados de Ubuntu. La siguiente sección mostrará cómo usar un repositorio alternativo para instalar diferentes versiones de Node.js.'
                />

    <DocumentationSection link='https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-es' /><br/>
    <DocumentationSection link='https://nodejs.org/en/' />

            </div>

    )
}

export default ReactProgramas
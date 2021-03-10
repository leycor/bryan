import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactComponents = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='COMPONENTES' />
                <DescriptionSection
                description='Se trata de funciones o clases que permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.'
                />


                <CodeSection
                language='javascript'
                code={`
import React, { Fragment } from 'react';

const Saludo = (props) => {
    return (
        <Fragment>
            <h2>Hola! {props.nombre}</h2>
        </Fragment>
    );
}
    
export default Saludo;

// El componente Saludo estaria recibiendo la propiedad **nombre** de la siguiente forma
<Saludo nombre='bryan' />

// El componente puede recibir cómo propiedad datos de tipo:
1- "Cadena"
2- Numerico
3- { boleanos } // true - false
4- { objetos }
5- { listas }
4- { funciones }

`} />



<DocumentationSection link='https://es.reactjs.org/docs/components-and-props.html' />

            </div>

    )
}

export default ReactComponents
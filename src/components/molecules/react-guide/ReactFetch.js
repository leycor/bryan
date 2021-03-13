import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactFetch = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Fetch API' />
                <DescriptionSection
                description='La API Fetch proporciona una interfaz para recuperar recursos, la forma de obtener estos es mediante la siguiente sintaxis:'
                />

                <CodeSection
                language='javascript'
                code={`

// Esta constante al tener fetch retorna un Response lo cual significa que es una promesa
const peticion = fetch('http://api.giphy.com/v1/gifs/random?}');

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
    })
    .catch( console.warn );
`} />
<DocumentationSection link='https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch' />

            </div>

    )
}

export default ReactFetch

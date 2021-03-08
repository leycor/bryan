import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactAsync = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Async Await' />
                <DescriptionSection
                description='Estas características, básicamente, actúan como azúcar sintáctico, haciendo el código asíncrono fácil de escribir y leer más tarde. Hacen que el código asíncrono se parezca más al código síncrono de la vieja escuela, por lo que merece la pena aprenderlo. '
                />

                <CodeSection
                language='javascript'
                code={`
const getImagen = async () => {
    const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

    try {
        const resp = await fetch('http://api.giphy.com/v1/gifs/random?api_key=C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC');
        const { data } = await resp.json();
        
        const { url } = data.images.original;

    } catch (error) {
        //Manejo de error
    }
}
`} />
                <DescriptionSection
                description='> El **await** le dice a la promesa, que necesita esperar que esta termine antes de ejecutar la siguiente linea de codigo, una vez termine se puede pensar que el codigo es sincrono'
                />
                <DocumentationSection link='https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await' />

            </div>

    )
}

export default ReactAsync
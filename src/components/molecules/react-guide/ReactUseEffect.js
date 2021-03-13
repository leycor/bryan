import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactUseEffect = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='USE EFFECT' />
                <DescriptionSection
                description='Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. '
                />
                <CodeSection
                language='javascript'
                code={`
import React, { useState, useEffect } from 'react';

const Ejemplo = () => {

    useEffect( () => {
        const mouseMove = (e) => {
            console.log(':D');
        }
        // Este evento se ejecutará cuando renderize nuestra pagina o cuando el componente sea montado
        window.addEventListener('mousemove', mouseMove);

        return() => {
            // Este evento se ejecutará cuando el componente sea desmontado
            window.addEventListener('mousemove', mouseMove);
        }
    },[])
}
`} />
                <DescriptionSection
                description='> Si le pasamos a nuestro ***useEffect cómo segundo parametro una lista vacia***, este se ejecutará una unica vez'
                />

                <DescriptionSection
                description='> La razón por la cual hay que remover el evento es porque este se va a ejecutar cada vez que exista un cambio en el componente y si estamos haciendo uso del useState, cada vez que se actualice el estado nuestro efecto se ejecutará de manera repetitiva'
                />
                

<DocumentationSection link='https://es.reactjs.org/docs/hooks-effect.html' />

            </div>

    )
}

export default ReactUseEffect
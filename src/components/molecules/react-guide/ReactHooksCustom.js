import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactHooksCustom = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='Construir hooks propios' />
                <DescriptionSection
                description='Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.'
                />
                <DescriptionSection
                description='***Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks.***'
                />

                <CodeSection
                language='javascript'
                code={`

import { useState } from 'react';

export const useCounter = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState( state +1 );
    }
    const decrement = () => {
        setState( state -1 );
    }

    return {
        state,
        increment,
        decrement
    };
}

`} />
                <DescriptionSection
                description='> Creamos una función la cual **NO retorna JSX**. Esta función retorna la lógica del componente por medio de un objeto. '
                />

                <DescriptionSection
                description='**Componente al cual vamos importar nuestro customHooks**'
                />

<CodeSection
                language='javascript'
                code={`
import React, { Fragment } from 'react'

// Importamos nuestro customhook
import { useCounter } from '../hooks/useCounter';

const ContadorConCustomHook = () => {

    // Desestructuramos lo que retornamos de nuestro customHooks
    const { state, increment, decrement } = useCounter();

    return(
        <Fragment>
            <h1> Contador con Hook {state} </h1>
            <button onClick={increment}> + 1 </button>
            <button onClick={decrement}> - 1 </button>
        </Fragment>
    );
}

export default ContadorConCustomHook
`} />

                <DescriptionSection
                description='> Importamos esa función a nuestra componente y hacemos el llamado de los elementos que exportamos de nuestro customHook'
                />
                

<DocumentationSection link='https://es.reactjs.org/docs/hooks-custom.html' />

            </div>

    )
}

export default ReactHooksCustom
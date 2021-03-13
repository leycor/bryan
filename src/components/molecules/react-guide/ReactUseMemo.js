import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactUseMemo = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='USE MEMO' />
                <DescriptionSection
                description='Devuelve un valor memorizado.

                Pasa una función de “crear” y un arreglo de dependencias. **`useMemo`** solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.'
                />
                <CodeSection
                language='javascript'
                code={`
import React,{ useMemo } from 'react'

const valorMemorizado = useMemo(() => funciónAEvaluar(a, b), [ dependencia ]);
`} />
                <DescriptionSection
                description='> Recuerde que la función pasada a useMemo se ejecuta durante el renderizado. No hagas nada allí que normalmente no harías al renderizar. Por ejemplo, los efectos secundarios pertenecen a useEffect, no auseMemo.'
                />
                

<DocumentationSection link='https://es.reactjs.org/docs/hooks-reference.html#usememo' />

            </div>

    )
}

export default ReactUseMemo
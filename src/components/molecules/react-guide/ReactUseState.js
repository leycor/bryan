import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactUseState = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='USE STATE' />
                <DescriptionSection
                description='Declara un ***estado en nuestro componente*** por medio de **desestructurar la función useState** que importamos y asignarle a este **dos variables**, la primera que será nuestro **estado** y la segunda variable será una **función** la cual nos permitirá modificar este estado.'
                />
                <CodeSection
                language='javascript'
                code={`
// Importamos useState
import React, { useState } from 'react';

const Ejemplo = () => {

    // Creados el estado
    const [count, setCount] = useState();
}
`} />
                <DescriptionSection
                description='> El estado inicial puede ser, un numero, string, objeto, lista o booleano'
                />
                
                <SubTitleSection subTitle='Leyendo el estado' />
                <DescriptionSection
                description='Colocar el nombre que asignamos cómo estado en el lugar que se quiera leer'
                />
                                <CodeSection
                language='xml'
                code={`
<p>You clicked {count} times</p>
`} />

                <SubTitleSection subTitle='Actualizando Estado' />
                <DescriptionSection
                description='Para actualizar nuestro estado tenemos que hacerlo mediante nuestro **segundo valor el cual es una función que recibe como parametro una callback***'
                />
<CodeSection
                language='xml'
                code={`
<button onClick={() => setCount(count + 1)}>
    Click me
</button>
`} />
                <SubTitleSection subTitle='Ejemplo' />
                <DescriptionSection
                description='Crearemos un componente el cual inicie el ***estado inicial en 0*** y cuando el usuario presione un boton este **incrementará en 1**'
                />
<CodeSection
                language='javascript'
                code={`
import React, { useState } from 'react';

const Ejemplo = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
`} />

<DocumentationSection link='https://es.reactjs.org/docs/hooks-state.html' />

            </div>

    )
}

export default ReactUseState
import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactEvents = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Eventos' />
                <DescriptionSection
                description='Manejar eventos en elementos de React es muy similar a manejar eventos con elementos del DOM. Hay algunas diferencias de sintaxis:'
                />


                <CodeSection
                language='xml'
                code={`
<button onClick={saludar}>
    Hola Mundo
</button>
`} />
                <DescriptionSection
                description='> Los eventos de React se nombran usando **camelCase** y Con JSX pasas una **función** como el manejador del evento'
                />

                <SubTitleSection subTitle='Prevenir Comportamiento' />
                <DescriptionSection
                description='Aquí hay un ejemplo que documenta los diferentes tipos de validadores:'
                />


                <CodeSection
                language='javascript'
                code={`
function ActionLink() {

    const ActivarLink = ( e ) => {
        e.preventDefault();
        console.log( 'El link ha sido clikeado' )
    }

    return(
        <a href="#" onClick={ ActivarLink }>
            Clickeame
        </a>
    );
}
`} />
                <SubTitleSection subTitle='Pasar argumentos a los evengos' />
                <DescriptionSection
                description='Dentro de un bucle es muy común querer pasar un parámetro extra a un manejador de eventos. Por ejemplo, si id es el ID de una fila, cualquiera de los códigos a continuación podría funcionar:'
                />


                <CodeSection
                language='html'
                code={`

<!-- Si pasamos una arrow function, esta función se ejecutará al momento de que el evento ocurra. -->
<button onClick={(e) => deleteRow(id, e)}>Eliminar Fila</button>

<!-- Si pasamos los parametros cómo funa función normal, esta se ejecutará cada vez que el componente se renderice -->
<button onClick={deleteRow(id, e)}>Eliminar Fila</button>
`} />




<DocumentationSection link='https://es.reactjs.org/docs/handling-events.html' />

            </div>

    )
}

export default ReactEvents
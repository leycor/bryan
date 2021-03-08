import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactPromesas = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Promesas' />
                <DescriptionSection
                description='Una promesa representa un valor que puede estar disponible: ahora, en un futuro o nunca.'
                />

                <CodeSection
                language='javascript'
                code={`
const promesa = new Promise( (resolve, reject)=>{

    //Función que recibe un callBack y permite ejecutar una tarea en cierto tiempo 
    setTimeout( ()=>{
        resolve();
    }, 2000 )
});

promesa.then( ()=>{
    console.log('Then de la promesa')
})
`} />
<DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then' />

            </div>

    )
}

export default ReactPromesas

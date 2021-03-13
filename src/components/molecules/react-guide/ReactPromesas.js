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
                <DescriptionSection
                description='Se trata de declarar un objeto que recibirá dos parametros **`resolve`**, que se encargará de devolverte la respuesta en caso de que no exista ningún error y **`reject`** que será la respuesta que retornará en caso de que exista un error'
                />

                <CodeSection
                language='javascript'
                code={`
const data = [
    {id:1, name:'Bryan'},
    {id:2, name:'Johann'},
    {id:3, name:'Jose'},
    {id:4, name:'Mario'},
]
    

const getData = () => {
    
    return new Promise((resolve, reject) =>{
        // Reject
        data.length === 0 && reject( new Error('No existen datos'));

        // Resolve
        setTimeout( () => { resolve(data); },1500)
    })
} 

// Llamamos al método then para que nos devuelva lo que resolvió la promesa
getData()
    .then((data) => console.log(data))
    .catch(error => console.log(error.message))
                     
`} />
<DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then' />

            </div>

    )
}

export default ReactPromesas

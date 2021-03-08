import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactConstLet = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Desestructuración de objetos' />
                <DescriptionSection
                description='La desestructuración de objeto nos ayuda a tener acceso a cada uno de los valores de este de manera directa, de tal manera no tendremos que estar colocando de forma repetitiva el nombre del objeto mas su clave para acceder a su valor.'
                />

                <CodeSection
                language='javascript'
                code={`
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Desestructurando el objeto persona
const { edad, clave, nombre, } = persona;

console.log( edad )
// Print: 45
`} />
                <DescriptionSection
                description='> De esta forma nos evitamos utilizar ***persona.edad*** para acceder a su valor.'
                />

                <SubTitleSection subTitle='Desestructuración de arrays' />
                <DescriptionSection
                description='Los arrays tambien los podemos desestructurar, pero cómo sus elementos no tienen una llave para poder identificarlos la manera de acceder a esto es por medio de sus posiciones, Ej:'
                />

                <CodeSection
                language='javascript'
                code={`
// Función que retorna una lista con dos elementos
const retornaArreglo = () =>{
    return ['ABC', 123];

// Desestructuramos la función para tener esos elementos separados por variables
const [ letras, numeros ] = retornaArreglo(); 
}
`} />

                <DocumentationSection link='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment' />

            </div>

    )
}

export default ReactConstLet

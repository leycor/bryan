import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";

// Utils

const ReactObjetoLiteral = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Objetos Literales' />
                <DescriptionSection
                description='Dado un objeto podemos crear una copia del mismo y referirnos a este usando la siguiente sintaxis'
                />

                <CodeSection
                language='javascript'
                code={`
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// Copia de objeto persona
const persona2 = { ...persona };
`} />

            </div>

    )
}

export default ReactObjetoLiteral
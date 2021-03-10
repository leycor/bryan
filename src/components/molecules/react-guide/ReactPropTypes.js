import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactPropTypes = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='PropTypes' />
                <DescriptionSection
                description='Se trata de funciones o clases que permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.'
                />


                <CodeSection
                language='javascript'
                code={`
// Importar libreria
import PropTypes from 'prop-types';

// Crear componente

const Saludo = ( nombre ) => {

    return(
        <h1>Hola, { nombre }</h1>
    );
}
    

Saludo.propTypes = {
nombre: PropTypes.string
};
`} />
                <DescriptionSection
                description='> **PropTypes** exporta un rango de validadores que pueden ser usados para estar seguros que la información recibida sea válida. En este ejemplo, usamos **PropTypes.string**. Cuando un valor inválido se asigna a una prop, se muestra una advertencia en la consola de Javascript. Por razones de desempeño, PropTypes solo se verifica en modo desarrollo.'
                />

<SubTitleSection subTitle='Validadores' />
                <DescriptionSection
                description='Aquí hay un ejemplo que documenta los diferentes tipos de validadores:'
                />


                <CodeSection
                language='javascript'
                code={`
// Especifica los valores por defecto de props:
Saludo.defaultProps = {
    nombre: 'Bryan'
};       

MyComponent.propTypes = {
    // Puedes declarar que una propiedad es un tipo específico de JS. Por defecto, estas
    // son todas opcionales.
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

// Puedes encadenar cualquiera de los anteriores con isRequired para asegurar
// que se muestre una advertencia si la prop no se suministra.
requiredFunc: PropTypes.func.isRequired,

// Un valor requerido de cualquier tipo de datos
requiredAny: PropTypes.any.isRequired,
`} />
                <DescriptionSection
                description='> **PropTypes** exporta un rango de validadores que pueden ser usados para estar seguros que la información recibida sea válida. En este ejemplo, usamos **PropTypes.string**. Cuando un valor inválido se asigna a una prop, se muestra una advertencia en la consola de Javascript. Por razones de desempeño, PropTypes solo se verifica en modo desarrollo.'
                />



<DocumentationSection link='https://es.reactjs.org/docs/typechecking-with-proptypes.html' />

            </div>

    )
}

export default ReactPropTypes
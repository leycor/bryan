import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxReducers = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Reducers' />
                <DescriptionSection
                description='Se trata de **funciones** que reciben como parametro el estado inicial de nuestra aplicación conocido como **`initialState`** y las acciones que realizaran una tarea dependiendo del tipo que sean. Esta función es la encargada de **modificar** nuestro **`store`**'
                />

                <CodeSection
                language='javascript'
                code={`
const initialStore = []
`} />
<               DescriptionSection
                description='> Nuestra constante initialStore es la que será enviada como argumento a nuestra función **`reducers`**, y definirá cual será nuestro **`state`** inicial, ya que este parametro no puede recibir un valor **`null`** o **`undefined`**. en este ejemplo colocamos como estado inicial una lista vacia, pero puedes tener como estado inicial distintos tipos de datos, como enteros, objetos, string, etc.'
                />

                <DescriptionSection
                description='¿Recuerdas nuestros **actionsType**? ¡Hola! aquí estoy siendo utilizado nuevamente para así poder definir que tarea realizar según la acción que llegue a nuestro reducers, que hasta este momento todavia no ha llegado, por ahora solo estamos definiendo lo que vamos hacer para cuando llegue, para que se entienda mejor estamos preparando apenas la fiesta para cuando llegue nuestro cumpleañeros '
                />
                <CodeSection
                language='javascript'
                code={`
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actions";

const Reducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Agregar acá tu logica
            return newState

        case REMOVE_FROM_CART:
            // Agregar acá tu logica
            return newState
    
        default:
            return state
    }
}
`} />
                <DescriptionSection
                description='> Esta función contiene en su interior un **switch** el cual evualuará el **`action.type`** y hará una tarea dependiendo del cual sea su **`type`**, ¿sabes quien es nuestro action? ¡SI! nuestro cumpleañeros, es ese objeto que nos retorna las funciones que creamos en nuestro **archivo** **`actionsCreator.js`** que hasta el momento no ha llegado, como aclaramos anteriormente, pero ya mas adelante lo vamos a traer aquí'
                />


                <SubTitleSection subTitle='redux' />
                <DescriptionSection
                description='Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones'
                />
                <DocumentationSection link='https://es.redux.js.org/docs/basico/reducers.html' /><br /><br />

            </div>

    )
}

export default ReactReduxReducers
import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxHooks = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='useSelector' />
                <DescriptionSection
                description='Le permite extraer datos del estado de la global Redux, utilizando una función de selector.'
                />

                <CodeSection
                language='javascript'
                code={`
import { useSelector } from 'react-redux'

const Component1 = () => {

    // Seleccionamos nuestro estado y accedemos al reducers que definimos en nuestro combineReducers          
    const cart = useSelector(store => store.cart)

}
`} />
<DocumentationSection link='https://react-redux.js.org/api/hooks#useselector' /><br /><br />

                <SubTitleSection subTitle='useDispatch' />
                <DescriptionSection
                description='Esta función se encargará de llevar nuestras ** acciones ** que son los **objetos** creados anterior mente en nuestro **`createActions.js`** hacia nuestro reducers y este argumento es la acción que recibe nuestro reducers para comenzar hacer sus tareas y poder modificar el estado'
                />

                <CodeSection
                language='javascript'
                code={`
import { useDispatch } from 'react-redux'

// Acciónes a usar en el componente
import { removeFromCart } from '../../redux/actions/createActions'

const Component1 = () => {

    const dispatch = useDispatch()

    // Función que hará uso del distpatch
    const handleRemoveFromCart = (id) => {
        dispatch( removeFromCart(id))


    // Boton que utilizará el usuario y disparará la acción
    return(
        <button onClick={()=> handleRemoveFromCart(id) }>remove</button>
    );
}

}
`} />


        <DocumentationSection link='https://react-redux.js.org/api/hooks#usedispatch' /><br /><br />

            </div>

    )
}

export default ReactReduxHooks
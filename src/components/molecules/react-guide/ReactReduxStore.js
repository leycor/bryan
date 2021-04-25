import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxStore = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Store' />
                <DescriptionSection
                description='Es Almacen que tiene toda la data **global** que va a fluir por toda nuestra aplicacion continuando con el ejemplo del cumpleaños, este es el lugar dónde se celebrará =D'
                />

                <CodeSection
                language='javascript'
                code={`
// store/store 

import { createStore, combineReducers, applyMiddleware } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

// Reducers
import { cartReducer } from '../reducers/cartReducer'
import { productsReducer } from '../reducers/productsReducer'

// Root Reducers
const rootReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

// Recibe como parametro (reducers, extensiónRedux)
export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
`} />

                <DescriptionSection
                description='> Lo que hicimos acá fue crear un nuevo **`folder`** que tendra nuestro archivo **`store.js`*,  este lo que hace es realizar las importaciones necesarias para poder crear nuestro store y poder exportarlos con los distintos reducer que tengamos'
                />

<SubTitleSection subTitle='¿Y ahora?' />
                <DescriptionSection
                description='Ya que tenemos todo creado, lo que hace falta es comenzar a darle uso y entender como es que fluyen todos nuestros datos haciendo uso de nuestra libreria **`react-redux`**.'
                />

                <DocumentationSection link='https://es.redux.js.org/docs/basico/store.html' /><br /><br />

            </div>

    )
}

export default ReactReduxStore
import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxActions = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='ActionsType && ActionsCreator' />
                <DescriptionSection
                description='Se trata de un listado de todas las acciones posibles que nuestra aplicación va a utilizar para poder modificar el estado, para trabajar de una manera mas cómoda con estas acciones y evitar repetir codigo o cometer errores al definirlas, las trabajaremos en archivos diferentes, como a **continuación**:'
                /><br />
                <SubTitleSection subTitle='ActionsType' />
                <DescriptionSection
                description='En este archivo definiremos y exportaremos todas nuestras posibles TIPOS DE ACCIONES a utilizar a lo largo de la aplicación'
                />

                <CodeSection
                language='javascript'
                code={`
// actions/actionsType.js
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

`} />
                <DescriptionSection
                description='> Solo se trata de una **constante** que tiene como valor el mismo nombre de como fue definida, esto nos ayudará a colocar estas constantes como **valor** en nuestros **objetos acciones**, de tal manera que no tengamos que escribir de manualmente las mismas y equivocarnos'
                />


                <SubTitleSection subTitle='ActionsCreator' />
                <DescriptionSection
                description='En este archivo, crearemos **funciones** que nos retornarán un **objeto**, este objeto contiene nuestro **tipo de acción** y la **data** la cual utilizaremos para modificar el store una vez que esta acción sea enviada.'
                />
                <CodeSection
                language='javascript'
                code={`
// actions/actionsCreator.js
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const removeFromCart = (id) => (
    {
        type: REMOVE_FROM_CART,
        payload: id
    }

const addToCart = ( product ) => (
    {
        type: REMOVE_FROM_CART,
        payload: product
    }

export {
    removeFromCart,
    addToCart
}

`} />
                <DescriptionSection
                description='> Como pudiste observar, pudimos hacer uso de nuestro tipo de acción sin necesidad de escribir texto plano, esto nos ayudará mucho a no cometer errores ni a escribir a cada rato nuestra acción en caso de utilizarla mas de una vez'
                />


                <SubTitleSection subTitle='¿Y AHORA?' />
                <DescriptionSection
                description='Hasta el momento, tenemos definidas todas nuestras acciones, pero todavia no estan siendo utilizadas, estas acciones tienen que ser despachadas por otra función para luego entrar en el reducer y hacer la tarea que tiene asignada según el tipo de acción'
                />
                <DocumentationSection link='https://es.redux.js.org/docs/basico/acciones.html' /><br /><br />

            </div>

    )
}

export default ReactReduxActions
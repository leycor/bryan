import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactReduxView = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='View' />
                <DescriptionSection
                description='Una vez tengamos definidas las **acciones**, **reducers** y nuestro **store** es hora de comenzar a darle uso a estas tres cosas por medio de nuestra libreria **react-redux**, lo primero que haremos será utilizar nuestro store en nuestro componente padre **`Provider`** el cual recibirá la propeidad **`store`** y este se encargará de distribuir todos los datos entre sus componentes'
                />

                <CodeSection
                language='javascript'
                code={`
import React from 'react'
import { Provider } from 'react-redux'

// Store
import store from '../../redux/store/store'

// Componentes
import ComponenteHijo from '../organisms/ComponenteHijo'
import ComponenteHijo2 from '../organisms/ComponenteHijo2'


const MainApp = () => {
    return (
        <Provider store= {store}> 
            <ComponenteHijo />
            <ComponenteHijo2 />
        </Provider>
    )
}

export default MainApp
                
`} />

                <DescriptionSection
                description='> Ahora todos los componentes que sean hijos, nietos y lo que sea que sigue tendran acceso al store'
                />

                <DocumentationSection link='https://react-redux.js.org/introduction/getting-started#provider' /><br /><br />

            </div>

    )
}

export default ReactReduxView
import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactUseContext = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">
                <SubTitleSection subTitle='USE CONTEXT' />
                <DescriptionSection
                description='Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en Reac. Usando Context podemos evitar pasar props a través de elementos intermedios'
                />
                <CodeSection
                language='javascript'
                code={`
// Importamos useState
import React, { createContext } from 'react';

export const UserContext = createContext(null);
`} />
                <DescriptionSection
                description='> Un context se declara igual que un componente y este puede recibir valores por defecto y todo lo que esté definido en el context creado estará disponible en todos sus componentes hijos'
                />
                
                <SubTitleSection subTitle='Agregar context' />
                <DescriptionSection
                description='Tendras que importar este cómo cualquier otro componente y si quieres pasar los datos a componentes tendras que colocar estos cómo hijos de la siguiente forma.'
                />
                                <CodeSection
                language='javascript'
                code={`
import { UserContext } from '../hook/UserContext'
import { useState } from 'react'

const MainApp = () => {

    const [user, setUtser] = useState({id: 1234,name: 'Bryan', email: 'bryanjohann1995@gmail.com'})

    return(

        <UserContext.Provider value={{user,setUser}}>

            <Componente1 />
            <Componente2 />

        </UserContext.Provider>
    );
}

export default MainApp
`} />

                <DescriptionSection
                description='> El .Provider nos será util para proveer información a todos sus componentes hijos mediante una propiedad llamada **value**'
                />

                <SubTitleSection subTitle='Usar datos de context en componentes hijos' />
                <DescriptionSection
                description='Para acceder a esta información lo primero que debemos hacer es importar el `useContext` de ***react*** y luego en nuestro componente tendriamos que llamar al `useContext` que creamos, en este caso seria ***UserContext***'
                />
<CodeSection
                language='javascript'
                code={`
import React, { useContext } from 'react';
import { UserContext } from '../hook/UserContext'

const Componente1 = () => {
    // Desestructuramos el objeto que enviamos por medio del provider.
    const {user, setUser} = useContext(useContext);

    console.log(user)
    // Print: {id: 1234,name: 'Bryan', email: 'bryanjohann1995@gmail.com'}
    return(

    );
}
`} />

<DocumentationSection link='https://es.reactjs.org/docs/hooks-state.html' />

            </div>

    )
}

export default ReactUseContext
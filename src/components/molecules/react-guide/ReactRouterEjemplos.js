import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactRouterEjemplos = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Ejemplos' />
                <DescriptionSection
                description='A continuación mostraremos un ejemplo básico de cómo es que se estructuran nuestras rutas con los componentes que importamos de nuestra libreria **`react-router-dom`**'
                />

                <CodeSection
                language='javascript'
                code={`
// Importar cada uno de los componentes a usar
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const AppRouter = () =>{

    return(
        <Router>
            <div>

                // Menú de navegación
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/users">Users</Link> </li>
                    </ul>
                </nav>

                // Rutas disponibles 
                <Switch>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/users" componens={Users}></Route>
                    <Route exact path="/" component={Home}></Route>
                </Switch>

            </div>
        </Router>
    );
}
`} />
                <DescriptionSection
                description='> Cada uno de estos componentes tiene mas propiedades disponibles, que podras ver en la documentación oficial que tienes abajo en el link'
                />


    <DocumentationSection link='https://reactrouter.com/web/guides/quick-start' />

            </div>

    )
}

export default ReactRouterEjemplos
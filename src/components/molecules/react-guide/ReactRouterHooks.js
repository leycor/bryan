import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';


// Utils

const ReactRouterHooks = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Hooks' />
                <DescriptionSection
                description='React Router se envía con algunas **`propiedades`** que le permiten acceder al estado del enrutador y realizar la navegación desde el interior de sus componentes.'
                />
                <DescriptionSection
                description='Tenga en cuenta: debe usar React> = 16.8 para usar cualquiera de estos ganchos.'
                />
                <SubTitleSection subTitle='use history' />
                <DescriptionSection
                description='El **`useHistory`** le da acceso a la history instancia que puede usar para navegar.'
                />

                <CodeSection
                language='javascript'
                code={`
import { useHistory } from "react-router-dom";

const HomeButton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/home");
    }

    return (
    <button type="button" onClick={handleClick}>
        Go home
    </button>
    );
}
`} />
                <SubTitleSection subTitle='use params' />
                <DescriptionSection
                description='**`useParams`** devuelve un objeto de pares clave / valor de parámetros de URL. Úselo para acceder **`match.params`** del componente <Route>.'
                />

                <CodeSection
                language='javascript'
                code={`
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

const BlogPost = () => {

    const { slug } = useParams();
    return <div>Now showing post {slug}</div>;
}

<Router>
    <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/blog/:slug" component={BlogPost}></Route>
    </Switch>
</Router>
`} />
                <DescriptionSection
                description='> En la documentación podras encontrar mas de estos hooks'
                />

                    <DocumentationSection link='https://reactrouter.com/web/guides/quick-start' />

            </div>

    )
}

export default ReactRouterHooks
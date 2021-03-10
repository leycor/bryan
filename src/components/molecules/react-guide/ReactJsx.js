import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils

const ReactJsx = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='JSX' />
                <DescriptionSection
                description='Es una extensión de la sintaxis de JavaScript. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.'
                />


                <CodeSection
                language='javascript'
                code={`
const element = <h1>Hola, Mundo!</h1>;
`} />
                <DescriptionSection
                description='> Esta curiosa sintaxis de etiquetas no es ni un string ni HTML..'
                />

                <SubTitleSection subTitle='INSERTANDO JSX' />
                <DescriptionSection
                description='Es una extensión de la sintaxis de JavaScript. JSX puede recordarte a un lenguaje de plantillas, pero viene con todo el poder de JavaScript.'
                />


                <CodeSection
                language='javascript'
                code={`
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
`} />
                <DescriptionSection
                description='> Puedes poner cualquier expresión de JavaScript dentro de llaves en JSX. Por ejemplo, 2 + 2, user.firstName, o formatName(user) son todas expresiones válidas de Javascript.'
                />


<DocumentationSection link='https://es.reactjs.org/docs/introducing-jsx.html' />

            </div>

    )
}

export default ReactJsx
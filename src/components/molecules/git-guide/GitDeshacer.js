import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitDeshacer = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Descartar cambios' />
                <DescriptionSection
                description='Una operativa habitual en Git es descartar cambios realizados sobre archivos, para volver al estado del último commit.'
                />

                <CodeSection
                language='bash'
                code={`
#Descartar cambios de un solo archivo
$ git checkout -- index.html

#Descartar todos los cambios y volver al ultimo commit
$ git checkout -f
`} />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Guardando-cambios-en-el-Repositorio' />
            </div>

    )
}

export default GitDeshacer
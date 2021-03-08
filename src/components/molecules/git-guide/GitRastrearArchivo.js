import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitRastrearArchivo = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Rastrear archivo nuevo' />
                <DescriptionSection
                description='Para comenzar a rastrear un archivo debes usar el comando ***git add***. Para comenzar a rastrear el archivo ***README***, puedes ejecutar lo siguiente.'
                />

                <CodeSection
                language='bash'
                code={`
#Rastrea un solo archivo
$ git add README

#rastrear todos los archivos que no se encuentren en .gitignore
$ git add .
`} />


                <DescriptionSection
                description='> Ahora si vuelves a ver el estado del proyecto, verás que el archivo ***README está siendo rastreado y está preparado para ser confirmado***'
                />
                <CodeSection
                language='bash'
                code={`
$ git status
On branch master
Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

    new file:   README
`} />

                <DescriptionSection
                description='> Puedes ver que está siendo rastreado porque aparece luego del encabezado “Cambios a ser confirmados” (“Changes to be committed” en inglés). Si confirmas en este punto, se guardará en el historial la versión del archivo correspondiente al instante en que ejecutaste git add.'
                />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Guardando-cambios-en-el-Repositorio' />
            </div>

    )
}

export default GitRastrearArchivo
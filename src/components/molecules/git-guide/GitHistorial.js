import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitHistorial = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Hitorial de confirmaciones' />
                <DescriptionSection
                description='Después de haber hecho varias confirmaciones, o si has clonado un repositorio que ya tenía un histórico de confirmaciones, probablemente quieras **mirar atrás para ver qué modificaciones se han llevado a cabo***. La herramienta más básica y potente para hacer esto es el comando ***git log***.'
                />

                <CodeSection
                language='bash'
                code={`
$ git log

#Log en una linea por commit
$ git log --oneline

#Log con ramas
$ git log --graph --oneline
`} />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Ver-el-Historial-de-Confirmaciones' />
            </div>

    )
}

export default GitHistorial
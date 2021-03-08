import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitEstados = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Estado de archivos' />
                <DescriptionSection
                description='La herramienta principal para determinar qué archivos están en qué estado es el comando ***git status***. Si ejecutas este comando inmediatamente después de clonar un repositorio, deberías ver algo como esto:'
                />

                <CodeSection
                language='bash'
                code={`
$ git status
#On branch master
#nothing to commit, working directory clean
                `} />

                <DescriptionSection
                description='> Esto significa que tienes un directorio de trabajo limpio - en otras palabras, que no hay archivos rastreados y modificados.'
                />

                <DescriptionSection
                description='Supongamos que ***añades un nuevo archivo a tu proyecto***, un simple ***README***. Si el archivo no existía antes y ejecutas git status, verás el ***archivo sin rastrear*** de la siguiente manera'
                />

                <CodeSection
                language='bash'
                code={`
$ echo 'My Project' > README
$ git status
On branch master
Untracked files:
    (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to tracK)
                `} />

                <DescriptionSection
                description='> Puedes ver que el archivo ***README*** está sin rastrear porque aparece debajo del encabezado ***“Untracked files” (“Archivos no rastreados” en inglés) en la salida.*** Sin rastrear significa que Git ve archivos que no tenías en el commit anterior. Git no los incluirá en tu próximo commit a menos que se lo indiques explícitamente'
                />

            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Guardando-cambios-en-el-Repositorio' />
            </div>

    )
}

export default GitEstados
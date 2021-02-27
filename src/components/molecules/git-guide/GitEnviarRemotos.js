import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitEnviarRemotos = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Enviar Remotos' />
                <DescriptionSection
                description='Cuando tienes un proyecto que quieres compartir, debes enviarlo a un servidor. El comando para hacerlo es   
                simple: ***git push [nombre-remoto] [nombre-rama]***.'
                />
                <CodeSection
                language='bash'

                code={`
$ git push origin master
`} />

                <SubTitleSection subTitle='Obtener Remotos' />
                <DescriptionSection
                description='Si has configurado una rama para que rastree una rama remota (más información en la siguiente sección y en [ch03-git-branching]), puedes usar el comando git pull para traer y combinar automáticamente la rama remota con tu rama actual.'
                />

                <CodeSection
                language='bash'

                code={`
$ git pull origin master
`} />

                <SubTitleSection subTitle='Eliminar Remoto' />
                <DescriptionSection
                description='Si por alguna razón quieres eliminar un remoto - has cambiado de servidor o no quieres seguir utilizando un mirror o quizás un colaborador ha dejado de trabajar en el proyecto - puedes usar ***git remote rm:***'
                />

                <CodeSection
                language='bash'

                code={`
$ git remote rm paul
$ git remote
origin
`} />



            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos' />
            </div>

    )
}

export default GitEnviarRemotos
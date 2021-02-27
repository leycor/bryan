import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitConfiguracion = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='CONFIGURACIÓN INICIAL' />
                <DescriptionSection
                description='Ahora que tienes Git en tu sistema, vas a querer hacer algunas cosas para personalizar tu entorno de Git. ***Es necesario hacer estas cosas solamente una vez en tu computadora***, y se mantendrán entre actualizaciones. También puedes cambiarlas en cualquier momento volviendo a ejecutar los comandos correspondientes.'
                />
                <DescriptionSection
                description='Lo primero que deberás hacer cuando instales Git es establecer tu ***nombre de usuario y dirección de correo electrónico.*** Esto es importante porque los ***"commits"*** de Git usan esta información, y es introducida de manera inmutable en los commits que envías'
                />

                <CodeSection
                language='bash'
                code={`
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
                `} />

                <SubTitleSection subTitle='COMPROBANDO TU CONFIGURACIÓN' />
                <DescriptionSection
                description='Si quieres comprobar tu configuración, puedes usar el comando git config --list para mostrar todas las propiedades que Git ha configurado'
                />

                <CodeSection
                language='bash'
                code={`
$ git config --list
#user.name=John Doe
#user.email=johndoe@example.com
#color.status=auto
#color.branch=auto
#color.interactive=auto
#color.diff=auto
                `} />

            <DocumentationSection link='https://git-scm.com/download/linux' />
            </div>

    )
}

export default GitConfiguracion

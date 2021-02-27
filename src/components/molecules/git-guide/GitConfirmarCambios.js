import React from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitConfirmarCambios = () => {
    return (

            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='Confirmar cambios' />
                <DescriptionSection
                description='Ahora que tu área de preparación está como quieres, puedes confirmar tus cambios. Recuerda que ***cualquier cosa que no esté preparada - cualquier archivo que hayas creado o modificado y que no hayas agregado con git add desde su edición - no será confirmado***. Se mantendrán como archivos modificados en tu disco. En este caso, digamos que la última vez que ejecutaste git status verificaste que todo estaba preparado y que estás listo para confirmar tus cambios. La forma más sencilla de confirmar es escribiendo ***git commit "[ mensaje de confirmación ]"***'
                />

                <CodeSection
                language='bash'
                code={`
git commit -m "Mi primer commit"
`} />


            <DocumentationSection link='https://git-scm.com/book/es/v2/Fundamentos-de-Git-Guardando-cambios-en-el-Repositorio' />
            </div>

    )
}

export default GitConfirmarCambios
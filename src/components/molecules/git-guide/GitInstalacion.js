import React, {Fragment} from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";
import DocumentationSection from "../../atoms/DocumentationSection";

// Utils

const GitInstalacion = () => {
    return (
        <Fragment>
            <div className="container mx-auto mb-10 guide-section">

                <SubTitleSection subTitle='INSTALAR EN LINUX' />
                <DescriptionSection
                description='Si quieres instalar Git en Linux a través de un instalador binario, en general puedes hacerlo mediante la herramienta básica de administración de paquetes que trae tu distribución.'
                />

                <CodeSection
                language='bash'
                code={`
$ sudo apt- install git

#Para Ubuntu, este PPA proporciona la última versión estable de Git.
add-apt-repository ppa:git-core/ppa
apt update
apt install git
                `} />

            <DocumentationSection link='https://git-scm.com/download/linux' />
            </div>

        </Fragment>
    )
}

export default GitInstalacion

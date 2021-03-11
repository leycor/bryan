import React, {Fragment} from 'react'

// Atoms
import SubTitleSection from "../../atoms/SubTitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import ImgSection from "../../atoms/ImgSection";
import DocumentationSection from '../../atoms/DocumentationSection';

// Utils
import reactImg from '../../../assets/icon/react.svg'

const ReactIntroduccion = () => {
    return (
        <Fragment>
            <div className="container mx-auto mb-10 guide-section">

                <ImgSection img={`${reactImg}`} />

                {/* Definición */}
                <SubTitleSection subTitle='INTRODUCCIÓN A REACTJS' />
                <DescriptionSection
                description='React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.'
                />
                <DescriptionSection
                description='En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.'
                />
                <DocumentationSection link='https://es.reactjs.org/docs/getting-started.html' />

            </div>

        </Fragment>
    )
}

export default ReactIntroduccion
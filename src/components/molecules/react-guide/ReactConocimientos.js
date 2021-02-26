import React, { Fragment } from "react";

// Atoms
import TitleSection from "../../atoms/TitleSection";
import DescriptionSection from "../../atoms/DescriptionSection";
import CodeSection from "../../atoms/CodeSection";

const ReactConocimientos = () => {
    return (
        <Fragment>
            <div className="container mx-auto mb-10">
                <TitleSection title='# CONOCIMIENTOS PREVIOS' />

                <DescriptionSection
                description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
                las industrias desde el año 1500, cuando un impresor (N. del T. persona
                que se dedica a la imprenta) desconocido usó una galería de textos y los
                mezcló de tal manera que logró hacer.' />

<CodeSection
code=
{`
<div class="grid grid-cols-3">
    <div class="bg-green-400">A</div>
    <div class="bg-green-500">B</div>
    <div class="bg-green-600">C</div>
    <div class="bg-green-700">D</div>
    <div class="bg-green-800">E</div>
    <div class="bg-green-900">F</div>
</div>

`} />
            </div>

        </Fragment>

    );
};

export default ReactConocimientos;

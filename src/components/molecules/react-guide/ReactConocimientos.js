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
lang='js'
code=
{`<body class="container mx-auto mt-5 text-center">

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
</div>

</body>

`} />
<CodeSection
lang='js'
code=
{`<body class="container mx-auto mt-5 text-center">

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
    <div class="bg-pink-400">A</div>
</div>

</body>

`} />
            </div>

        </Fragment>

    );
};

export default ReactConocimientos;

import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

import '../../assets/hack.css'


const CodeSection = ({ code, language}) => (

    <div className=" text-sm rounded mb-10">
        <SyntaxHighlighter language={ language } style={ vs2015 }>
            { code }
        </SyntaxHighlighter>
</div>
)

export default CodeSection
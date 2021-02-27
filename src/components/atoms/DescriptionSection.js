import React from 'react'
import ReactMarkdown from "react-markdown";

// Css
import '../../assets/hack.css'

const DescriptionSection = ({ description }) => (


    <ReactMarkdown source={ description } />
    // <p className="text-base text-gray-700 mb-3">{ description }</p>
)

export default DescriptionSection
import React, {Fragment} from 'react'

const DocumentationSection = ({link}) => {
    return (
        <Fragment>
            <span className='mr-1 italic'>Documentación: </span>
            <a href={link} target="_blank_" className='break-words text-smt text-green-600 hover:text-green-800 mb-2 italic'>{link}</a>
        </Fragment>
    )
}

export default DocumentationSection

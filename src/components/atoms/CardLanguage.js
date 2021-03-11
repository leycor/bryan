import React from 'react'

const CardLanguage = ( { language=[], tecnology }) => (

    language.length > 0
    &&
    <div>
        <p className='mb-1 font-bold text-xs text-gray-700 uppercase'>{ tecnology }</p>
        {
            language.map( ({id, name}) =>
            
            <div key={id} style={{backgroundImage: `url(${name})`}} className='mr-1 inline-block h-5 w-5 bg-no-repeat mb-1'></div> 
            )
        }
    </div>
)

export default CardLanguage
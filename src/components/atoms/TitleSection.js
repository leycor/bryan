import React, {Fragment} from 'react'

const TitleSection = ({ title }) => (

    <Fragment>
        <p className="text-center font-bold text-lg text-gray-600 mb-4 uppercase "> { title } </p>
        <hr className='mb-8'/>
    </Fragment>
)

export default TitleSection
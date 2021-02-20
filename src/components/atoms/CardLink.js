import React from 'react'

const CardLink = ({ link }) => (

    <a href={ link } className='font-medium text-xs text-green-600 uppercase hover:text-green-700 mb-1'>{link}</a>
)

export default CardLink
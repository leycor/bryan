import React from 'react'

const CardLogo = ({ logo }) => (

    <div style={{backgroundImage: `url(./${logo})`}} className='h-8 bg-no-repeat mb-2'></div>
)

export default CardLogo
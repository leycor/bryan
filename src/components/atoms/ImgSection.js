import React from 'react'

const ImgSection = ({img}) => (
    <div style={{backgroundImage: `url(${img})`}} className='mb-3 w-10 h-10  bg-no-repeat'></div>
)

export default ImgSection

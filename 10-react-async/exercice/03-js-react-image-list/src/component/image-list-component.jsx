import React from 'react'

const ImageListComponent = ({ index, src }) => (
    <li id={index}>
        <img src={'image/' + src} alt={src} />
    </li>
)

export default ImageListComponent

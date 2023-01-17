import React, { Component } from 'react'
import ImageListComponent from '../component/image-list-component'

const IMAGES = [
    'image-1.jpg',
    'image-2.jpg',
    'image-3.jpg',
    'image-4.jpg',
    'image-5.jpg'
]

class ImageContainer extends Component {
    constructor () {
        super()

        this.state = {
            images: []
        }
    }

    componentDidMount () {
        this.setState({ images: IMAGES })
    }

    render () {
        return (
            <ul>
                {this.state.images.map((img, index) => (
                    <ImageListComponent key={index} src={img} />
                ))}
            </ul>
        )
    }
}

export default ImageContainer

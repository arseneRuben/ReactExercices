import React, { Component } from 'react'
import FormComponent from '../component/form-component'

class FrameContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            page1Fields: []

        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount () {
        this.setState({
            page1Fields: [{ inputName: 'Prenom', inputType: 'text' },
                { inputName: 'Nom', inputType: 'text' },
                { inputName: 'Email', inputType: 'email' }]
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    render () {
        return (
            <>

                <div>
                    <FormComponent fields={this.state.page1Fields} onSubmit={this.handleOnSubmit} />

                </div>
            </>
        )
    }
}

export default FrameContainer

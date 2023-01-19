import React, { Component } from 'react'

class FormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            formValues: {}
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
    }

    handleInputOnChange (event) {
        this.setState({
            formValues: Object.assign(this.state.formValues, {
                [event.target.name]: event.target.value
            })
        })
    }

    render () {
        return (
            <div>
                <h1>Formulaire</h1>
                <form />
                <h1>État</h1>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </div>
        )
    }
}

export default FormContainer

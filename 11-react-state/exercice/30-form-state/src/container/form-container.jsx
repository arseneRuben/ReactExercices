import React, { Component } from 'react'
import InputComponent from '../component/input-component'

class FormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            formValues: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleOnSubmit = e => {
        e.preventDefault()
    }

    handleChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    render () {
        return (
            <div>
                <h1>Formulaire</h1>
                <form id='form-test' onSubmit={this.handleOnSubmit}>

                    <InputComponent text='Nom d&#39;usager ' name='userName' value={this.state.formValues.userName} onChange={this.handleChange} />
                    <InputComponent text='Pr&eacute;nom ' name='fistName' value={this.state.formValues.fistName} onChange={this.handleChange} />
                    <InputComponent text='Nom ' name='lastName' value={this.state.formValues.lastName} onChange={this.handleChange} />

                </form>

                <h1>État</h1>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </div>
        )
    }
}

export default FormContainer

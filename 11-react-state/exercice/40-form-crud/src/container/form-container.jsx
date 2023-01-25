import React, { Component } from 'react'
import FormComponent from '../component/form-component'
import InputComponent from '../component/input-component'
import ListComponent from '../component/list-component'

class FormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            users: []
        }

        this.handleCheck = this.handleCheck.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/users', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ users: response })
            })
    }

    handleOnSubmit = e => {
        e.preventDefault()
    }

    handleCheck (e) {
        this.setState({
            showForm: e.target.checked
        })
    }

    render () {
        return (
            <>

                <InputComponent type='checkbox' text='Formulaire?' name='showForm' onChange={this.handleCheck} />

                <div>

                    {this.state.showForm ? <FormComponent userName='userName' firstName='firstName' lastName='lastName' /> : <ListComponent items={this.state.users} />}

                </div>
                <InputComponent type='button' value='Ajouter un usager' />
            </>
        )
    }
}

export default FormContainer

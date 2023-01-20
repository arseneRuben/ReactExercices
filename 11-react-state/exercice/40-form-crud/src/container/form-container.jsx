import React, { Component } from 'react'
import FormComponent from '../component/form-component'
import InputComponent from '../component/input-component'
import ListComponent from '../component/list-component'
const USERS = [
    {
        id: 1,
        userName: 'patate',
        firstName: 'Pat',
        lastName: 'Ate'
    },
    {
        id: 2,
        userName: 'gcote',
        firstName: 'Gros',
        lastName: 'Coté'
    },
    {
        id: 3,
        userName: 'fmartineau',
        firstName: 'François',
        lastName: 'Martineau'
    },
    {
        id: 4,
        userName: 'mstpierre',
        firstName: 'Marc',
        lastName: 'St-Pierre'
    },
    {
        id: 5,
        userName: 'msimard',
        firstName: 'Mélanie',
        lastName: 'Simard'
    },
    {
        id: 6,
        userName: 'agermain',
        firstName: 'Audrée',
        lastName: 'Germain'
    }
]
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
        this.setState({ users: USERS })
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

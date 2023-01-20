import React, { Component } from 'react'
// import InputComponent from '../component/input-component'
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

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
        this.setState({ users: USERS })
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

                    {/* <InputComponent text='Nom d&#39;usager ' name='userName' value={this.state.formValues.userName} onChange={this.handleChange} />
                    <InputComponent text='Pr&eacute;nom ' name='fistName' value={this.state.formValues.fistName} onChange={this.handleChange} />
                    <InputComponent text='Nom ' name='lastName' value={this.state.formValues.lastName} onChange={this.handleChange} />
        */}
                </form>

                <h1>État</h1>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
            </div>
        )
    }
}

export default FormContainer

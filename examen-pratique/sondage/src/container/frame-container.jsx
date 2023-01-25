import React, { Component } from 'react'
import FormComponent from '../component/form-component'

class FrameContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            page1Fields: [],
            page2Fields: [],
            page3Fields: [],
            show1: true,
            show2: false,
            show3: false,
            page1Values: [],
            page2Values: [],
            page3Values: []

        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentDidMount () {
        this.setState({
            page1Fields: [{ inputName: 'firstName', inputLabel: 'Prenom', inputType: 'text' },
                { inputName: 'lastName', inputLabel: 'Nom', inputType: 'text' },
                { inputName: 'email', inputLabel: 'Email', inputType: 'email' }],
            page2Fields: [{ inputName: 'presence', inputLabel: 'Quatite de matiere presente', inputType: 'select' },
                { inputName: 'debit', inputLabel: 'Debit des presentations et exercices', inputType: 'select' },
                { inputName: 'remise', inputLabel: 'Quatite d\'exercices a remettre', inputType: 'select' }],

            page3Fields: [{ inputName: 'comments', inputLabel: 'Commentaire', inputType: 'textarea' },
                { inputName: 'suggestions', inputLabel: 'Suggestion', inputType: 'textarea' }]

        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        if (e.target.id === 'form1') {
            // Update show
            this.setState({ show1: false })
            this.setState({ show2: true })
            // collect datas
            this.setState({
                page1Values: {
                    ...this.state.page1Values,
                    [e.target.elements[0].name]: e.target.elements[0].value,
                    [e.target.elements[1].name]: e.target.elements[1].value,
                    [e.target.elements[2].name]: e.target.elements[2].value
                }
            })
        }
        if (e.target.id === 'form2') {
            // Update show
            this.setState({ show2: false })
            this.setState({ show3: true })
            // collect datas
            this.setState({
                page2Values: {
                    ...this.state.page2Values,
                    [e.target.elements[0].name]: e.target.elements[0].value,
                    [e.target.elements[1].name]: e.target.elements[1].value,
                    [e.target.elements[2].name]: e.target.elements[2].value
                }
            })
        }
        if (e.target.id === 'form3') {
            // collect datas
            this.setState({
                page3Values: {
                    ...this.state.page3Values,
                    [e.target.elements[0].name]: e.target.elements[0].value,
                    [e.target.elements[1].name]: e.target.elements[1].value,
                    [e.target.elements[2].name]: e.target.elements[2].value
                }
            })
        }
    }

    render () {
        console.log(this.state)
        return (
            <>

                <div>
                    {this.state.show1 ? <FormComponent fields={this.state.page1Fields} onSubmit={this.handleOnSubmit} validate='Suivant' formId='form1' /> : <div />}
                    {this.state.show2 ? <FormComponent fields={this.state.page2Fields} onSubmit={this.handleOnSubmit} validate='Suivant' formId='form2' /> : <div />}
                    {this.state.show3 ? <FormComponent fields={this.state.page3Fields} onSubmit={this.handleOnSubmit} validate='Suivant' formId='form3' /> : <div />}

                </div>
            </>
        )
    }
}

export default FrameContainer

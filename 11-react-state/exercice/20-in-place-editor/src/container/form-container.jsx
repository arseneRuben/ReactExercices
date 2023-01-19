import React, { Component } from 'react'
import InputComponent from '../component/input-component'
// import TextComponent from '../component/text-component'

const EDIT_LABEL = 'IsEditing'

class FormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userNameIsEditing: false,
            userNameValue: 'mvachon',

            emailIsEditing: false,
            emailValue: 'mvachon@server.com',

            messageIsEditing: false,
            messageValue: 'message de test'
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnChange = e => {
        const {
            target: { value, name }
        } = e

        this.setState({
            [name + 'Value']: value
        })
    }

    handleOnClick = e => {
        console.log(e)
        const {
            target: { name }
        } = e
        this.setState({
            [name + EDIT_LABEL]: true
        })
        Object.keys(this.state).forEach(key => {
            if (key.includes(EDIT_LABEL) && key !== name + 'IsEditing') {
                this.setState({
                    [name + EDIT_LABEL]: false
                })
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()

        const {
            userNameIsEditing,
            userNameValue,
            emailIsEditing,
            emailValue,
            messageIsEditing,
            messageValue
        } = this.state
        const data = {
            userNameIsEditing,
            userNameValue,
            emailIsEditing,
            emailValue,
            messageIsEditing,
            messageValue
        }

        console.log('Data:', data)
    }

    render () {
        return (
            <div>
                <h1>Profil utilisateur</h1>
                <form id='form-test' onSubmit={this.handleOnSubmit}>
                    <InputComponent
                        text='Nom:'
                        type='text'
                        id='name_id'
                        name='userName'
                        value={this.state.userNameValue}
                        onChange={this.handleOnChange}
                        onClick={this.handleOnClick}
                    />
                    {/* <InputComponent
                        text='Email:'
                        type='text'
                        id='email_id'
                        name='email'
                        value={this.state.emailValue}
                        onChange={this.handleOnChange}
                        onClick={this.handleOnClick}
                    />
                    <TextComponent
                        label='Message'
                        htmsFor1='msg_id'
                        content={this.state.messageValue}
                        cols='20'
                        rows='5'
                        onChange={this.handleOnChange}
                        onClick={this.handleOnClick}
        /> */}
                    <h1> State</h1>
                    <p>{JSON.stringify(this.state, null, 4)}</p>
                </form>
            </div>
        )
    }
}

export default FormContainer

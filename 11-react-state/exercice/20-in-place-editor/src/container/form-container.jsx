import React, { Component } from 'react'
import InputComponent from '../component/input-component'
import TextComponent from '../component/text-component'

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
        // this.resetState = this.resetState.bind(this)
    }

    handleOnChange = (file) => e => {
        this.setState({
            [file + 'Value']: e.target.value
        })
    }

    handleOnClick = (file) => e => {
        this.resetState()

        this.setState({
            [file + EDIT_LABEL]: true
        })
    }

    resetState = () => {
        this.setState({
            userNameIsEditing: false,
            emailIsEditing: false,
            messageIsEditing: false
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.resetState()
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
                        onChange={this.handleOnChange('userName')}
                        onClick={this.handleOnClick('userName')}
                        editing={this.state.userNameIsEditing}
                    />
                    <InputComponent
                        text='Email:'
                        type='text'
                        id='email_id'
                        name='email'
                        value={this.state.emailValue}
                        onChange={this.handleOnChange('email')}
                        onClick={this.handleOnClick('email')}
                        editing={this.state.emailIsEditing}
                    />
                    <TextComponent
                        label='Message'
                        name='message'
                        htmsFor1='msg_id'
                        content={this.state.messageValue}
                        cols='20'
                        rows='5'
                        onChange={this.handleOnChange('message')}
                        onClick={this.handleOnClick('message')}
                        editing={this.state.messageIsEditing}
                    />
                    <div>
                        <button>Submit</button>
                    </div>
                    <h1> State</h1>
                    <pre>{JSON.stringify(this.state, null, 4)}</pre>
                </form>
            </div>
        )
    }
}

export default FormContainer

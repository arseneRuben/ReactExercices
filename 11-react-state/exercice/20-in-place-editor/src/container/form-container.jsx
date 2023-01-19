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

    handleOnChange = e => {
        console.log('je suis dans event')
        const {
            target: { value, name }
        } = e
        console.log('test', value, name)
        this.setState({
            [name + 'Value']: value
        })
    }

    handleOnClick = e => {
        this.resetState()

        this.setState({
            [e.target.id + EDIT_LABEL]: true
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
                        editing={this.state.userNameIsEditing}
                    />
                    <InputComponent
                        text='Email:'
                        type='text'
                        id='email_id'
                        name='email'
                        value={this.state.emailValue}
                        onChange={this.handleOnChange}
                        onClick={this.handleOnClick}
                        editing={this.state.emailIsEditing}
                    />
                    <TextComponent
                        label='Message'
                        name='message'
                        htmsFor1='msg_id'
                        content={this.state.messageValue}
                        cols='20'
                        rows='5'
                        onChange={this.handleOnChange}
                        onClick={this.handleOnClick}
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

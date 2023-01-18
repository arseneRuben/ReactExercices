import React, { Component } from 'react'

import InputComponent from 'component/input-component'

class FormContainer extends Component {
    componentDidMount () {
        console.log('FormContainer componentDidMount()') // eslint-disable-line
    }

    componentWillUnmount () {
        console.log('FormContainer componentWillUnmount()') // eslint-disable-line
    }

    render () {
        return (
            <div>
                <h1>Formulaire pour l&#39;ajout des usagers</h1>

                <form id='form-test'>
                    <InputComponent
                        text="Nom d'usager:"
                        type='text'
                        name='userName'
                        id='name_id'
                    />
                </form>

                <button onClick={this.props.onHandleSaveOnClick}>
                    Sauvegarder
                </button>
            </div>
        )
    }
}

export default FormContainer

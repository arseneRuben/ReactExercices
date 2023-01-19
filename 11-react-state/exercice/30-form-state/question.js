/**
 * Exercice - form-state
 *
 * Objectifs:
 *  - Gestion de l'état d'un formulaire.
 *
 * Consignes:
 *  - Créer la composante form-container.
 *  - Écrire une  méthode qui va mettre à jour le state pour tous les  champs du formulaire.
 *  - Note: En utilisant le spread operator ... le state formValues est copié dans un nouvel objet
 *      et le champ en édition remplace la valeur précédente en utilisant les braquettes: [name]: value
 */

import React, { Component } from 'react'

class FormContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            formValues: {}
        }
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

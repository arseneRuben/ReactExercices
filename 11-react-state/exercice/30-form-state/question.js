/**
 * Exercice - form-state
 *
 * Objectifs:
 *  - Gestion de l'état d'un formulaire.
 *
 * Consignes:
 *  - Créer la composante form-container en utilisant le code ci desous.
 *  - Ajouter le code manquant pour produire le résultat de la maquette.
 *  - Note: la partie État présente le contenu du state React du conteneur
 *
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
            formValues: Object.assign(this.state.formValues, { [event.target.name]: event.target.value })
        })
    }

    render () {
        return (
            <div>
                <h1>Formulaire</h1>
                <form />
                <h1>État</h1>
                <pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>
            </div>
        )
    }
}

export default FormContainer

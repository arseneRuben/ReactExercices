import React, { Component } from 'react'
import RadioTitleComponent from '../../../02-js-react-form-title/src/component/radio-title-component'
import InputComponent from '../component/input-component'
import SelectComponent from '../component/select-component'
const OPTIONS = [
    {
        label: 'Afghanistan',
        value: '1'
    },
    {
        label: 'Afrique du Sud',
        value: '2'
    },
    {
        label: 'Albanie',
        value: '3'
    },
    {
        label: 'Algérie',
        value: '4'
    }
]
const TITLES = [
    {
        label: 'Duc',
        number: 0
    },
    {
        label: 'Duchesse',
        number: 1
    },
    {
        label: 'Marquis',
        number: 2
    },
    {
        label: 'Marquise',
        number: 3
    },
    {
        label: 'Comte',
        number: 4
    },
    {
        label: 'Comtesse',
        number: 5
    }
]
class FormContainer extends Component {
    render () {
        return (
            <div>
                <h1>Formulaire usager</h1>
                <form id='form-test'>
                    <InputComponent
                        text="Nom d'usager:"
                        type='text'
                        id='userName_id'
                        name='userName'
                    />
                    <InputComponent
                        text='Prenom:'
                        type='text'
                        id='firstName_id'
                        name='firstName'
                    />
                    <InputComponent
                        text='Nom:'
                        type='text'
                        id='lastName_id'
                        name='lastName'
                    />
                    <InputComponent
                        text='Age:'
                        type='number'
                        id='old_id'
                        name='old'
                    />
                    <SelectComponent
                        text='Pays:'
                        id='country_id'
                        value='Algérie'
                        options={OPTIONS}
                    />
                    <RadioTitleComponent
                        legend='Titre:'
                        id='title_id'
                        name='title'
                        titles={TITLES}
                    />
                </form>
            </div>
        )
    }
}

export default FormContainer

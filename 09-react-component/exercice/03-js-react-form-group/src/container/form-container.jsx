import React, { Component } from 'react'
import InputComponent from '../component/input-component'
import SelectComponent from '../component/select-component'
import SelectGroupComponent from '../component/select-group-component'

const OPTION_GROUPS = [
    {
        label: 'Theropods',
        options: [
            {
                label: 'Tyrannosaurus',
                number: 0
            },
            {
                label: 'Velociraptor',
                number: 1
            },
            {
                label: 'Deinonychus',
                number: 2
            }
        ]
    },
    {
        label: 'Sauropods',
        options: [
            {
                label: 'Diplodocus',
                number: 3
            },
            {
                label: 'Saltasaurus',
                number: 4
            },
            {
                label: 'Apatosaurus',
                number: 5
            }
        ]
    }
]

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
                    <SelectGroupComponent
                        text='dinosaur:'
                        id='dinosaur_id'
                        optGroups={OPTION_GROUPS}
                    />
                </form>
            </div>
        )
    }
}

export default FormContainer

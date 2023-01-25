import React from 'react'
import InputComponent from './input-component'
import SelectComponent from './select-component'
import TextAreaComponent from './text-area-component'

const OPTIONS = [
    'Insuffisant',
    'Suffisant',
    'Exagere'
]
function renderInput ({ inputType, inputName, inputId, label }) {
    <h1>{inputType}</h1>
    switch (inputType) {
    case 'text':
    case 'email':
        return <InputComponent type={inputType} name={inputName} id={inputId} />
    case 'select':
        return <SelectComponent label={label} id={inputId} options={OPTIONS} />
    case 'textarea':
        return <TextAreaComponent label={label} id={inputId} />
    default:
        return null
    }
}

const DivInputComponent = ({ inputType, inputName, label, inputId }) => (

    <div className='form-example'>
        <label htmlFor={inputId}>{label}: </label>
        <span>
            {(inputType, inputName, label, inputId) => renderInput(inputType, inputName, inputId, label)}
        </span>
    </div>

)

export default DivInputComponent

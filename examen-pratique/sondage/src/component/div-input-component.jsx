import React from 'react'
import InputComponent from './input-component'
import SelectComponent from './select-component'
import TextAreaComponent from './text-area-component'

const OPTIONS = [
    { label: 'Insuffisant', value: 1 },
    { label: 'Suffisant', value: 2 },
    { label: 'Exagere', value: 3 }
]
const renderInput = (inputType, inputName, inputId, value) => {
    switch (inputType) {
    case 'text':
    case 'email':
        return <InputComponent type={inputType} name={inputName} id={inputId} value={value} />
    case 'select':

        return <SelectComponent name={inputName} id={inputId} options={OPTIONS} value={value} />
    case 'textarea':
        return <TextAreaComponent name={inputName} id={inputId} value={value} />
    default:
        return null
    }
}

const DivInputComponent = ({ inputType, inputName, label, inputId, value }) => (

    <>

        <div className='form-example'>
            <label htmlFor={inputId}>{label}: </label>
            <span>

                {renderInput(inputType, inputName, inputId, value)}
            </span>
        </div>
    </>

)

export default DivInputComponent

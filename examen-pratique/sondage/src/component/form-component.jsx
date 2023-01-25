import React from 'react'
import DivInputComponent from './div-input-component'
/*
   fields [
        {inputName1, inputType1},
        {inputName2, inputType2},
        {inputName3, inputType3},
          ...
   ]
*/
const FormComponent = ({ fields, onSubmit }) => (
    <>
        <form onSubmit={onSubmit}>
            <ul>
                {fields.map((field, index) => {
                    return <li key={index}><DivInputComponent inputType={field.inputType} inputName={field.inputName} label={field.inputName} id={index} /></li>
                })}
            </ul>

        </form>
    </>
)

export default FormComponent

import React from 'react'
import InputComponent from '../component/input-component'

const FormComponent = ({ userName, firstName, lastName, onSubmit, onChange }) => (
    <>
        <h1>Formulaire</h1>
        <form id='form-test' onSubmit={onSubmit}>

            <InputComponent type='text' text='Nom d&#39;usager ' name={userName} onChange={onChange} />
            <InputComponent type='text' text='Pr&eacute;nom ' name={firstName} onChange={onChange} />
            <InputComponent type='text' text='Nom ' name={lastName} onChange={onChange} />

        </form>
    </>
)

export default FormComponent

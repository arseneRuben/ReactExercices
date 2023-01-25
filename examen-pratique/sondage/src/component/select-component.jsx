import React from 'react'

function renderOption (option, index) {
    return (
        <option key={index} value={option.value}>
            {option.label}
        </option>
    )
}
const SelectComponent = ({ inputName, id, options }) => (

    <select name={inputName} id={id}>
        {options.map((option, index) => renderOption(option, index))}
    </select>

)

export default SelectComponent

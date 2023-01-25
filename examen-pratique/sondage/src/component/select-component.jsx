import React from 'react'

function renderOption (option, index) {
    return (
        <option key={index} value={option.value}>
            {option.label}
        </option>
    )
}
const SelectComponent = ({ label, id, options }) => (
    <div>
        <label htmlFor={id}>{label}</label>

        <select id={id}>
            {options.map((option, index) => renderOption(option, index))}
        </select>
    </div>
)

export default SelectComponent

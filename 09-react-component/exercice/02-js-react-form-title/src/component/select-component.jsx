import React from 'react'

function renderOption (option, index) {
    return (
        <option key={index} value={option.value}>
            {option.label}
        </option>
    )
}
const SelectComponent = ({ text, id, value, options }) => (
    <div>
        <label htmlFor={id}>{text}</label>

        <select id={id}>
            {options.map((option, index) => renderOption(option, index))}
        </select>
    </div>
)

export default SelectComponent

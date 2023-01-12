import React from 'react'

function renderOption (label, index) {
    return (
        <option key={index} value={index}>
            {label}
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

import React from 'react'

function renderOption (option, index) {
    return (
        <option key={index} value={option}>
            {option}
        </option>
    )
}

const SelectComponent = ({ text, id, options, name, onChange }) => (
    <div>
        <label htmlFor={id}>{text}</label>

        <select id={id} name={name} onChange={onChange}>
            {options.map((option, index) => renderOption(option, index))}
        </select>
    </div>
)

export default SelectComponent

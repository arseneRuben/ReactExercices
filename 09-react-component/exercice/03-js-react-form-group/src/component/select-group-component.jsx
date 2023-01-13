import React from 'react'

function renderOption (option, index) {
    return (
        <option key={index} value={option.value}>
            {option.label}
        </option>
    )
}

function renderOptionGroup (optGroup, index1) {
    return (
        <optgroup key={index1} label={optGroup.label}>
            {optGroup.options.map((option, index2) =>
                renderOption(
                    option,
                    index1.toString() + '_' + index2.toString()
                )
            )}
        </optgroup>
    )
}
const SelectGroupComponent = ({ text, id, optGroups }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <select id={id}>
            {optGroups.map((optGroup, index1) =>
                renderOptionGroup(optGroup, index1)
            )}
        </select>
    </div>
)

export default SelectGroupComponent

import React from 'react'

const InputComponent = ({ text, type, id, name, value, onChange }) => (
    <div>
        <label htmlFor={id}>{text}:</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
)

export default InputComponent

import React from 'react'

const InputComponent = ({
    text,
    type,
    id,
    name,
    value,
    onChange,
    onClick,
    editing
}) => (
    <div onClick={onClick}>
        <label htmlFor={id}>{text}</label>
        <span id={name}>
            {editing ? (<input type={type} name={name} value={value} onChange={onChange} />) : (value)}
        </span>
    </div>
)

export default InputComponent

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
        <span>
            {editing ? (<input type={type} name={name} id={id} value={value} onChange={onChange} />) : (value)}
        </span>
    </div>
)

export default InputComponent

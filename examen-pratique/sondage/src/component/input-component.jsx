import React from 'react'

const InputComponent = ({ type, id, name, value }) => (
    <>
        <h1> {type}</h1>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </>
)

export default InputComponent

import React from 'react'

const InputComponent = ({ type, id, name, value }) => (
    <>

        <input
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </>
)

export default InputComponent

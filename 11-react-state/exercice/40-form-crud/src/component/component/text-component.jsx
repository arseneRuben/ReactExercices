import React from 'react'

const TextComponent = ({
    label,
    htmlFor1,
    content,
    onChange,
    onClick,
    cols = '40',
    rows = '5',
    name
}) => (
    <>
        <label htmlFor={htmlFor1}>{label}:</label>
        <textarea
            cols={cols}
            rows={rows}
            value={content}
            onChange={onChange}
            onClick={onClick}
            name={name}
        />
    </>
)

export default TextComponent

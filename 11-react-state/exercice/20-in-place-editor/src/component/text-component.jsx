import React from 'react'

const TextComponent = ({
    label,
    htmlFor1,
    content,
    onChange,
    onClick,
    editing,
    cols = '40',
    rows = '5',
    name
}) => (
    <div>
        <label htmlFor={htmlFor1}>{label}:</label>
        <span onClick={onClick}>
            {editing ? (<textarea cols={cols} rows={rows} value={content} onChange={onChange} name={name} />) : (content)}
        </span>

    </div>
)

export default TextComponent

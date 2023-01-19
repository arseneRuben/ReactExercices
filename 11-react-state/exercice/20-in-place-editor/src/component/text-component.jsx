import React from 'react'

const TextComponent = ({
    label,
    htmlFor1,
    content,
    cols = '40',
    rows = '5'
}) => (
    <>
        <label htmlFor={htmlFor1}>{label}:</label>
        <textarea cols={cols} rows={rows} value={content} />
    </>
)

export default TextComponent

import React from 'react'

const TextAreaComponent = ({
    label,
    htmlFor1,
    content,
    cols = '40',
    rows = '5',
    name
}) => (
    <div>
        <label htmlFor={htmlFor1}>{label}:</label>
        <span>
            <textarea cols={cols} rows={rows} value={content} name={name} />
        </span>

    </div>
)

export default TextAreaComponent

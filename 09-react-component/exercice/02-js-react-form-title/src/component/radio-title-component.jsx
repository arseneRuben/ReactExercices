import React from 'react'

function renderTitle (id, name, title) {
    return (
        <div>
            <input type='radio' id={id} name={name} value={title} />
            <label for={title}>{title} </label>
        </div>
    )
}

const RadioTitleComponent = ({ legend, id, name, titles }) => (
    <fieldset>
        <legend> {legend}</legend>
        {titles.map((index, title) =>
            renderTitle(id + '_' + index, name, title)
        )}
    </fieldset>
)

export default RadioTitleComponent

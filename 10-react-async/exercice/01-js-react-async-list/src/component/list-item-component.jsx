import React from 'react'

function onClickHandler (event) {
    console.log(event.target.id)
    console.log(event)
    console.log(event.target.cible)
}
const ListItemComponent = ({ id, text, cible }) => (
    <li id={id} parent={cible} onClick={onClickHandler}>
        {text}
    </li>
)

export default ListItemComponent

import React from 'react'

function onClickHandler (event) {
    // console.log(this)
    console.log(event)
    // console.log(event)
}
const ListItemComponent = ({ text }) => <li onClick={onClickHandler}>{text}</li>

export default ListItemComponent

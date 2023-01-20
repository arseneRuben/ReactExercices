import React from 'react'
import InputComponent from './input-component'
// import ListItemComponent from './list-item-component'

const ListComponent = ({ items }) => (
    <>
        {items.map((item, index) => (
            <li key={index}> <strong>{item.userName}</strong>:{item.firstName} &nbsp; {item.lastName} <InputComponent type='button' value='x' /></li>
        ))}
    </>

)

export default ListComponent

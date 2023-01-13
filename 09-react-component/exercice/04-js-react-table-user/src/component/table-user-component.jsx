import React from 'react'

function renderTr (user, index) {
    return (
        <tr key={index} scope='row'>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
        </tr>
    )
}

const TableUserComponent = ({ users }) => (
    <table>
        <thead>
            <tr>
                <th scope='col'>Prenom</th>
                <th scope='col'>Nom</th>
                <th scope='col'>Age</th>
            </tr>
        </thead>
        <tbody>{users.map((user, index) => renderTr(user, index))}</tbody>
    </table>
)

export default TableUserComponent

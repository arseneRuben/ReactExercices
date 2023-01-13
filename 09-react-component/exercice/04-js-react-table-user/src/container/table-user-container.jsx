import React, { Component } from 'react'
import TableUserComponent from '../component/table-user-component'

const USERS = [
    {
        firstName: 'Martin',
        lastName: 'Vachon',
        age: 45
    },
    {
        firstName: 'Julie',
        lastName: 'Turgeon',
        age: 18
    },
    {
        firstName: 'Mélanie',
        lastName: 'Simard',
        age: 67
    },
    {
        firstName: 'Pierre',
        lastName: 'Coté',
        age: 34
    },
    {
        firstName: 'Nadia',
        lastName: 'Beaulieu',
        age: 35
    }
]

class TableUserContainer extends Component {
    render () {
        return (
            <div>
                <TableUserComponent users={USERS} />
            </div>
        )
    }
}
export default TableUserContainer

import React, { Component } from 'react'

import ListItemComponent from 'component/list-item-component'

class ListContainer extends Component {
    constructor () {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount () {
        fetch('user-list.json', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ users: response })
            })
    }

    render () {
        return (
            <div>
                <h1>Liste d&#39;usager</h1>
                <ul>
                    {this.state.users.map((user, index) => (
                        <ListItemComponent key={index} text={user.userName} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListContainer

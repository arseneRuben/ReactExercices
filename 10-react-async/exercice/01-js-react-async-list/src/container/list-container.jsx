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
        const emptyList = this.state.users.length === 0
        let output
        if (!emptyList) {
            output = this.state.users.map((user, index) => (
                <ListItemComponent
                    key={index}
                    id={index}
                    text={user.userName}
                    cible={this}
                />
            ))
        } else {
            output = (
                <ListItemComponent
                    key='-1'
                    id={-1}
                    text='Aucun usager trouvé ...'
                    cible={this}
                />
            )
        }
        return (
            <div>
                <h1>Liste d&#39;usager</h1>

                <ul>{output}</ul>
            </div>
        )
    }
}

export default ListContainer

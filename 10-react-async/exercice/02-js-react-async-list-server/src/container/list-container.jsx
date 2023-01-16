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
        fetch('http://localhost:8080/users', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ users: response })
            })
    }

    handleClick = e => {
        console.log(e.target.id)
        console.log(e)
        console.log(this)
    }

    render () {
        const emptyList = this.state.users.length === 0

        let output
        if (!emptyList) {
            output = this.state.users.map((user, index) => (
                <ListItemComponent
                    key={index}
                    index={index}
                    text={user.userName}
                />
            ))
        } else {
            output = (
                <ListItemComponent
                    key='-1'
                    index={-1}
                    text='Aucun usager trouvé ...'
                />
            )
        }
        return (
            <div onClick={this.handleClick}>
                <h1>Liste d&#39;usager</h1>

                <ul>{output}</ul>
            </div>
        )
    }
}

export default ListContainer

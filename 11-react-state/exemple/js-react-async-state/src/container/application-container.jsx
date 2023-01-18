import React, { Component } from 'react'

import ToolbarComponent from 'component/toolbar-component'
import FormContainer from 'container/form-container'
import ListContainer from 'container/list-container'

class ApplicationContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isFormOpen: false
        }

        this.handleAddOnClick = this.handleAddOnClick.bind(this)
        this.handleSaveOnClick = this.handleSaveOnClick.bind(this)
    }

    handleAddOnClick () {
        this.setState({ isFormOpen: true })
    }

    handleSaveOnClick () {
        this.setState({ isFormOpen: false })
    }

    render () {
        const BUTTONS = [
            {
                label: 'Ajouter un usager',
                handleOnClick: this.handleAddOnClick
            }
        ]

        return (
            <div>
                <h1>Application</h1>
                <ToolbarComponent buttons={BUTTONS} />
                <div>
                    {this.state.isFormOpen ? (
                        <FormContainer
                            onHandleSaveOnClick={this.handleSaveOnClick}
                        />
                    ) : (
                        <ListContainer />
                    )}
                </div>
            </div>
        )
    }
}

export default ApplicationContainer

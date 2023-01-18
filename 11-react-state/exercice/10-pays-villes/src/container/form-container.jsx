import React, { Component } from 'react'
import SelectComponent from '../component/select-component'
import * as countries from '../../all-countries-and-cities-json-master/countries.min.json'

class FormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = { countries: countries.default }
    }

    handleOnChange = e => {
        const {
            target: { value, name }
        } = e

        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <div>
                <h1>Formulaire usager</h1>
                <form id='form-test'>
                    <SelectComponent
                        text='Pays:'
                        id='country_id'
                        name='country'
                        value='Algérie'
                        options={this.state.countries}
                        onChange={this.handleOnChange}
                    />
                </form>
            </div>
        )
    }
}

export default FormContainer

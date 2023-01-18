import React, { Component } from 'react'
import SelectComponent from '../component/select-component'
import * as countries from '../../all-countries-and-cities-json-master/countries.min.json'

class FormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            countries: countries.default,
            country: '',
            city: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange = e => {
        this.setState({
            country: e.target.value
        })
        console.log(this.state)
    }

    render () {
        console.log(
            Object.values(this.state.countries)[
                Object.keys(this.state.countries).indexOf(
                    this.state.country
                ) === -1
                    ? 0
                    : Object.keys(this.state.countries).indexOf(
                          this.state.country
                      )
            ]
        )

        return (
            <div>
                <h1>Formulaire usager</h1>
                <form id='form-test'>
                    <SelectComponent
                        text='Pays:'
                        id='country_id'
                        name='country'
                        value={this.state.country}
                        options={Object.keys(this.state.countries)}
                        onChange={this.handleOnChange}
                    />
                    <SelectComponent
                        text='Ville:'
                        id='city_id'
                        name='city'
                        value={this.state.city}
                        options={[]}
                        onChange={this.handleOnChange}
                    />
                </form>
            </div>
        )
    }
}

export default FormContainer

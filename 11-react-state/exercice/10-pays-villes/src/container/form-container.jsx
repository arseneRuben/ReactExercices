import React, { Component } from 'react'
import SelectComponent from '../component/select-component'
import * as countries from '../../all-countries-and-cities-json-master/countries.min.json'

class FormContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            countries: countries.default,
            country: '',
            city: '',
            temp: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange = e => {
        const {
            target: { value, name }
        } = e

        this.setState({
            [name]: value
        })

        if (e.target.id === 'city_id') {
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=52261c83c6e8a4c8e14e163120944701`
            )
                .then(response => response.json())
                .then(data => this.setState({ temp: data.main.temp - 273.5 }))
        }
    }

    render () {
        const selectedCountry =
            this.state.country.length === 0 ? 'Afghanistan' : this.state.country

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
                        options={this.state.countries[selectedCountry]}
                        onChange={this.handleOnChange}
                    />
                    <p>{this.state.temp}</p>
                </form>
            </div>
        )
    }
}

export default FormContainer

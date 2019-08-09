import React from 'react';
import 'whatwg-fetch';
import config from '../config.json';
import WeatherCard from './WeatherCard';


class TorontoWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Toronto',
            lastUpdated: '',
            condition: '',
            temperature: '',
            feelsLike: '',
            unit: '',
        }

    }

    componentWillMount() {
        this.getTorontoWeather();
    }

    getTorontoWeather() {

        const API_URL = config['torontoapi'];

        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw Error(response.statusText);
            }).then(data => {
                this.setState({
                    lastUpdated: data.updatetime,
                    condition: data.wxcondition,
                    temperature: data.temperature,
                    feelsLike: data.feels_like,
                    unit: data.temperature_unit
                });
            }).catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (
                <div>
                    <WeatherCard data={this.state} />
                </div>
        );
    }
}


export default TorontoWeather;

import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { getWeather } from '../../services';
import Location from './Location';
import WeatherData from './WeatherData';
import { getWeatherData } from '../../utils';
import './styles.css';

export default class WeatherLocation extends Component {
	state = {
		city: 'Toledo',
		data: null,
	};

	componentDidMount() {
		this.handleClick();
	}

	handleClick = () => {
		getWeather()
			.then((response) => {
				const { data } = response;
				const newWeather = getWeatherData(data);

				this.setState({ data: newWeather });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { city, data } = this.state;

		return (
			<div className="weather-location__container">
				<Location city={city} />
				{data ? <WeatherData data={data} /> : <CircularProgress />}
				<button onClick={this.handleClick}>Update</button>
			</div>
		);
	}
}

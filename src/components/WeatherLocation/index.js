import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { getWeather, getURLByCity } from '../../services';
import Location from './Location';
import WeatherData from './WeatherData';
import { getWeatherData } from '../../utils';
import './styles.css';

export default class WeatherLocation extends Component {
	static propTypes = {
		city: Proptypes.string.isRequired,
		onWeatherLocationClick: Proptypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		const { city } = props;

		this.state = {
			city,
			data: null,
		};
	}

	componentDidMount() {
		this.handleClick();
	}

	handleClick = () => {
		const URL = getURLByCity(this.props.city);

		getWeather(URL)
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
		const { onWeatherLocationClick } = this.props;
		const { city, data } = this.state;

		return (
			<div className="weather-location__container" onClick={onWeatherLocationClick}>
				<Location city={city} />
				{data ? <WeatherData data={data} /> : <CircularProgress />}
				<button onClick={this.handleClick}>Update</button>
			</div>
		);
	}
}

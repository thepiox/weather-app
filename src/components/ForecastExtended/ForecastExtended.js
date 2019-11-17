import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { WEEK_DAYS } from '../../constants';
import { getURLForecastByCity, getForecast } from '../../services';
import ForecastItem from './ForecastItem/ForecastItem';
import './styles.css';

const data = {
	humidity: 10,
	temperature: 10,
	weatherState: 'sun',
	wind: '10 m/s',
};

export default class ForecastExtended extends Component {
	static propTypes = {
		city: PropTypes.string.isRequired,
	};

	constructor() {
		super();
		this.state = { forecastData: null };
	}

	componentDidMount() {
		const URL = getURLForecastByCity(this.props.city);

		getForecast(URL)
			.then((response) => {
				console.log(response);
				// const { data } = response;
				// const newWeather = getWeatherData(data);

				// this.setState({ data: newWeather });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	renderProgress = () => {
		return <CircularProgress />;
	};

	renderForecastItemDays = () => {
		return WEEK_DAYS.map((weekDay) => <ForecastItem weekDay={weekDay} key={weekDay} hour={10} data={data} />);
	};

	render() {
		const { city } = this.props;
		const { forecastData } = this.state;

		return (
			<div>
				<h2 className="forecast-title">Pronostico extendido {city}</h2>
				{forecastData ? this.renderForecastItemDays() : this.renderProgress()}
			</div>
		);
	}
}

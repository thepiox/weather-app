import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { getForecast } from '../../services';
import { getForecastData } from '../../utils';
import ForecastItem from './ForecastItem';
import './styles.css';

export default class ForecastExtended extends Component {
	static propTypes = {
		city: PropTypes.string.isRequired,
	};

	constructor() {
		super();
		this.state = { forecastData: null, isLoading: false };
	}

	componentDidMount() {
		this.updateCity(this.props.city);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.city !== this.props.city) {
			this.updateCity(this.props.city);
		}
	}

	renderProgress = () => {
		return <CircularProgress />;
	};

	updateCity = (city) => {
		this.setState({ isLoading: true });

		getForecast(city)
			.then((forecastResponse) => {
				const newForecast = getForecastData(forecastResponse.data);
				this.setState({ forecastData: newForecast, isLoading: false });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	renderForecastItemDays = (forecastData) => {
		return (
			Array.isArray(forecastData) &&
			forecastData.map((forecastItem) => (
				<ForecastItem
					weekDay={forecastItem.weekDay}
					key={forecastItem.id}
					hour={forecastItem.hour}
					data={forecastItem.data}
				/>
			))
		);
	};

	render() {
		const { city } = this.props;
		const { forecastData, isLoading } = this.state;

		return (
			<div className="forecast__container">
				<h2 className="forecast-title">Pronostico extendido {city}</h2>
				{isLoading ? this.renderProgress() : this.renderForecastItemDays(forecastData)}
			</div>
		);
	}
}

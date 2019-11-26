import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from '../store/actions';
import { getWeatherCities, getCity } from '../store/reducers';
import LocationList from '../components/LocationList/LocationList';

class LocationListContainer extends Component {
	static propTypes = {
		cities: PropTypes.array.isRequired,
		citiesWeather: PropTypes.array,
		city: PropTypes.string.isRequired,
		setCity: PropTypes.func.isRequired,
		setWeather: PropTypes.func.isRequired,
	};

	componentDidMount() {
		const { setCity, setWeather, cities, city } = this.props;

		setCity(city);
		setWeather(cities);
	}

	handleSelectLocation = (city) => {
		this.props.setCity(city);
	};

	render() {
		return <LocationList cities={this.props.citiesWeather} onSelectLocation={this.handleSelectLocation} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCity: (city) => dispatch(setSelectedCity(city)),
	setWeather: (city) => dispatch(setWeather(city)),
});

const mapStateToProps = (state) => ({
	city: getCity(state),
	citiesWeather: getWeatherCities(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

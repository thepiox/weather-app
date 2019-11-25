import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from '../store/actions';
import LocationList from '../components/LocationList/LocationList';

class LocationListContainer extends Component {
	static propTypes = {
		setCity: PropTypes.func.isRequired,
		cities: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

	handleSelectLocation = (city) => {
		this.props.setCity(city);
	};

	render() {
		return <LocationList cities={this.props.cities} onSelectLocation={this.handleSelectLocation} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCity: (city) => dispatch(setSelectedCity(city)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);

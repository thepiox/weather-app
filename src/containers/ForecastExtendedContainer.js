import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended/ForecastExtended';

class ForecastExtendedContainer extends Component {
	static propTypes = {
		city: PropTypes.string,
		forecastData: PropTypes.array,
	};

	render() {
		const { city, forecastData } = this.props;

		return (
			<Fragment>
				{city ? (
					<ForecastExtended city={city} forecastData={forecastData} />
				) : (
					<div>
						<h2 className="forecast-title">No se ha seleccionado ninguna ciudad</h2>
					</div>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

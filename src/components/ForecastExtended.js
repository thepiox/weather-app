import React, { Component } from 'react';

export default class ForecastExtended extends Component {
	render() {
		const { city } = this.props;

		return <div>Pronostico extendido {city}</div>;
	}
}

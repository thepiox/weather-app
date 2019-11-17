import React, { Component } from 'react';
import { Paper, Toolbar, AppBar, Typography } from '@material-ui/core';
import { Row, Grid, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList/LocationList';
import ForecastExtended from './components/ForecastExtended/ForecastExtended';

const cities = ['Toledo', 'Madrid', 'Toronto'];
export default class App extends Component {
	constructor() {
		super();

		this.state = { city: null };
	}

	handleSelectLocation = (city) => {
		this.setState({ city });
	};

	render() {
		const { city } = this.state;

		return (
			<Grid>
				<Row>
					<AppBar position="sticky">
						<Toolbar>
							<Typography variant="h3" color="inherit">
								Weather App
							</Typography>
						</Toolbar>
					</AppBar>
				</Row>

				<Row>
					<Col xs={12} md={6}>
						<LocationList cities={cities} onSelectLocation={this.handleSelectLocation} />
					</Col>

					<Col xs={12} md={6}>
						<Paper elevation={4}>
							{city ? (
								<ForecastExtended city={city} />
							) : (
								<div>
									<h2 className="forecast-title">No se ha selecciondo ninguna ciudad</h2>
								</div>
							)}
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	}
}

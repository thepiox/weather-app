import React, { Component } from 'react';
import { Paper, Toolbar, AppBar, Typography } from '@material-ui/core';
import { Row, Grid, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';

const cities = ['Toledo', 'Madrid', 'Toronto'];
export default class App extends Component {
	handleSelectLocation = (city) => {
		console.log(city);
	};

	render() {
		return (
			<Grid>
				<Row>
					<AppBar position="sticky">
						<Toolbar>
							<Typography variant="title" color="inherit">
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
							<div>ASAS</div>
						</Paper>
					</Col>
				</Row>
			</Grid>
		);
	}
}

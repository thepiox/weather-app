import React from 'react';
import { Paper, Toolbar, AppBar, Typography } from '@material-ui/core';
import { Row, Grid, Col } from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';

const cities = ['Toledo', 'Madrid', 'Toronto'];

const App = () => (
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
				<LocationListContainer cities={cities} />
			</Col>
			<Col xs={12} md={6}>
				<Paper elevation={4}>
					<ForecastExtendedContainer />
				</Paper>
			</Col>
		</Row>
	</Grid>
);

export default App;

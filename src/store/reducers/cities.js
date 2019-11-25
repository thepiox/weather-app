import { SET_FORECAST } from '../actions';

const cities = (state = {}, action) => {
	switch (action.type) {
		case SET_FORECAST:
			const { city, forecastData } = action.payload;
			return { ...state, [city]: { forecastData } };
		default:
			return state;
	}
};

export default cities;

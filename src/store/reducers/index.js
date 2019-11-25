import { combineReducers } from 'redux';
import city from './city';
import cities from './cities';

export default combineReducers({
	cities,
	city,
});

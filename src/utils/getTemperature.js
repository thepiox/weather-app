import convert from 'convert-units';

const getTemperature = (kelvinTemperature) =>
	Number(
		convert(kelvinTemperature)
			.from('K')
			.to('C')
			.toFixed(0)
	);

export default getTemperature;

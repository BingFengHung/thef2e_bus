const initState = {
	country: 'NewTaipei',
	stops: null
}

const itemReducer = (state = initState, action) => {
	switch (action.type) {
		case 'Country': {
			const data = Object.assign({}, state);
			data.country = action.payload.country
			return data;
		}

		case 'Stops': {
			const data = Object.assign({}, state);
			data.stops = action.payload.stops
			return data;
		}

		default:
			return state;
	}
}

export { itemReducer }
const initState = {
	country: 'NewTaipei'
}

const itemReducer = (state = initState, action) => {
	switch (action.type) {
		case 'Country': {
			const data = Object.assign({}, state);
			data.country = action.payload.country
			return data;
		}

		default:
			return state;
	}
}

export { itemReducer }
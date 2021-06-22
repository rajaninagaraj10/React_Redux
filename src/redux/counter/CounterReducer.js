const initialState = {
	count: 0,
};

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREAMENT":
			return {
				...state,
				count: state.count + 1,
				data: action.payload,
			};
		case "DECREAMENT":
			return {
				...state,
				count: state.count - 1,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default CounterReducer;

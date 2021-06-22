export const increamentCounter = (data) => {
	return {
		type: "INCREAMENT",
		payload: data,
	};
};

export const decreamentCounter = (data) => {
	return {
		type: "DECREAMENT",
		payload: data,
	};
};

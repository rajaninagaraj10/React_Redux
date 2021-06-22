import { FETCH_ALL, UPDATE_CATEGORY } from "./CustomDeskType";

export const fetchAll = (data) => {
	return {
		type: FETCH_ALL,
	};
};

export const updateCategory = (data) => {
	return {
		type: UPDATE_CATEGORY,
		payload: data,
	};
};

import axios from "axios";

import {
	FETCH_DATA,
	FETCH_SUCCESS,
	FETCH_ERROR,
	FETCH_BY_RANK,
	FETCH_BY_RELEASEDATE,
	MODAL_IMAGE,
} from "./movieTypes";

export const fetchData = () => {
	return {
		type: FETCH_DATA,
	};
};

export const fetchSuccess = (data) => {
	return {
		type: FETCH_SUCCESS,
		payload: data,
	};
};

export const fetchError = (error) => {
	return {
		type: FETCH_ERROR,
		payload: error,
	};
};

export const fetchByRank = () => {
	return {
		type: FETCH_BY_RANK,
	};
};

export const fetchByReleaseDate = () => {
	return {
		type: FETCH_BY_RELEASEDATE,
	};
};

export const modalImage = () => {
	return {
		type: MODAL_IMAGE,
	};
};

export const asyncFetchData = () => {
	return (dispatch) => {
		dispatch(fetchData());
		axios
			.get("./data.json")
			.then((response) => {
				const data = response.data;

				dispatch(fetchSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchError(error.message));
			});
	};
};

import {
	FETCH_DATA,
	FETCH_SUCCESS,
	FETCH_ERROR,
	FETCH_BY_RELEASEDATE,
	FETCH_BY_RANK,
	MODAL_IMAGE,
} from "./movieTypes";

const initialState = {
	loading: false,
	data: null,
	movies: [],
	error: "",
	modalIsOpen: false,
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				loading: true,
			};
		case FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: "",
			};
		case FETCH_ERROR:
			return {
				...state,
				loading: false,
				data: [],
				error: action.payload,
			};
		case FETCH_BY_RANK:
			return {
				...state,
				movies: [state.data].map((item) =>
					item.components.map((subItem) =>
						subItem.type === "movie-list"
							? subItem.items.sort((a, b) => a.rank - b.rank)
							: null
					)
				),
			};
		case FETCH_BY_RELEASEDATE:
			console.log("inside fetch by release state contains", state);
			return {
				...state,
				movies: [state.data].map((item) =>
					item.components.map((subItem) =>
						subItem.type === "movie-list"
							? subItem.items.sort((a, b) => a.releaseDate - b.releaseDate)
							: null
					)
				),
			};

		case MODAL_IMAGE:
			return {
				...state,
				modalIsOpen: !state.modalIsOpen,
			};

		default:
			return state;
	}
};

export default movieReducer;

import menu from "../../materialUIcomponents/modal/menu";

import { FETCH_ALL, UPDATE_CATEGORY } from "./CustomDeskType";

const initialState = {
	items: menu,
	category: "All",
	categoryItems: [],
	filterName: "",
};

const customDeskReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_ALL:
			return {
				...state,
			};
		case UPDATE_CATEGORY:
			return {
				...state,
				category: payload,
			};

		default:
			return state;
	}
};

export default customDeskReducer;

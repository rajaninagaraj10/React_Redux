import { combineReducers } from "redux";
import CakeReducer from "../redux/cake/CakeReducer";
import IceCreamReducer from "../redux/icecream/IceCreamReducer";
import movieReducer from "../redux/movies/movieReducer";
import CounterReducer from "../redux/counter/CounterReducer";
import customDeskReducer from "./customdesk/CustomDeskReducer";

const RootReducer = combineReducers({
	Cake: CakeReducer,
	IceCream: IceCreamReducer,
	data: movieReducer,
	counter: CounterReducer,
	customdesk: customDeskReducer,
});

export default RootReducer;

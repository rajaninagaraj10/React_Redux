import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(
	RootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;

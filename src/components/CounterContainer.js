import React from "react";
import { connect } from "react-redux";
import {
	increamentCounter,
	decreamentCounter,
} from "../redux/counter/CounterActions";
const CounterContainer = (props) => {
	const { count, increamentCounter, decreamentCounter } = props;

	const handleIncreament = () => {
		increamentCounter();
	};
	const handleDecreament = () => {
		decreamentCounter();
	};

	return (
		<div>
			<div>{`count value is ${count}`}</div>
			<button onClick={handleIncreament}>Click to increament</button>
			<button onClick={handleDecreament}>Click to decreament</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
	};
};

const dataIncreament = "hello";

const dataDecrement = {
	id: "1",
	name: "rajani",
};
const mapDispatchToProps = (dispatch) => {
	return {
		increamentCounter: () => dispatch(increamentCounter(dataIncreament)),
		decreamentCounter: () => dispatch(decreamentCounter(dataDecrement)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

import React from "react";
import { useHistory } from "react-router-dom";

const Button = () => {
	const handleButton = () => {
		console.log("inside handle button");
	};
	return (
		<div>
			<h1>Hello button</h1>
			<button onClick={handleButton} data-testid="button1">
				click
			</button>
		</div>
	);
};
export default Button;

import React from "react";

const Events = () => {
	const [changeText, setChangeText] = React.useState(false);
	const handleClick = () => {
		setChangeText(true);
	};
	return (
		<div>
			{!changeText ? (
				<p>content before clicking the button</p>
			) : (
				<p>content after button click</p>
			)}
			<button onClick={handleClick}>click</button>
		</div>
	);
};

export default Events;

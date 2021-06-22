import React from "react";
import Modal from "./Modal";
import WidgetDisplay from "./Widget";

const Widget = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>{isModalOpen ? <Modal /> : <WidgetDisplay onclick={handleClick} />}</>
	);
};

export default Widget;

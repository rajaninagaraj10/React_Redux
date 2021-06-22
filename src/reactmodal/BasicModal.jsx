import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const BasicModal = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				shouldCloseOnOverlayClick={false}
				// style={{
				// 	overlay: {
				// 		backgroundColor: "grey",
				// 	},
				// 	content: {
				// 		color: "yellow",
				// 	},
				// }}
			>
				<h2>Modal Header</h2>
				<p>Modal body</p>
				<h4>footer</h4>
				<button onClick={closeModal}>Cancel</button>
			</Modal>
		</>
	);
};

export default BasicModal;

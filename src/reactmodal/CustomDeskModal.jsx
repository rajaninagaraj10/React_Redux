import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const ModalHeader = styled.div``;
const ModalBody = styled.div`
	display: flex;

	.itemsfilter {
		flex: 2;
	}
	.contents {
		flex: 4;
		overflow: auto;
	}
`;
const ModalFooter = styled.div``;

const CustomDeskModal = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<Grid container justify="center">
			<Grid item>
				<button onClick={openModal}>Open Modal</button>
			</Grid>
			<Grid item>
				<Modal
					isOpen={isModalOpen}
					onRequestClose={closeModal}
					shouldCloseOnOverlayClick={false}

				>
					<ModalHeader>close icon</ModalHeader>
					<ModalBody>
						<div className="itemsfilter">filter column</div>
						<div className="contents">content</div>
					</ModalBody>

					<ModalFooter>
						<button onClick={closeModal}>Cancel</button>
						<button onClick={closeModal}>Add</button>
					</ModalFooter>
				</Modal>
			</Grid>
		</Grid>
	);
};

export default CustomDeskModal;

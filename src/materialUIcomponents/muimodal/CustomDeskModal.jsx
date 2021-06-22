import React from "react";
import MUIModal from "./MUIModal";
import MUIButton from "../../reusable/materialui/MUIButton";
import SideNav from "../../materialUIcomponents/modal/SideNav";
import DialogBody from "../modal/DialogBody";
import styled from "styled-components";

const CustomDeskModal = () => {
	const [open, setOpen] = React.useState(false);
	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const handleAddItems = () => {
		alert("add items");
	};

	return (
		<>
			<MUIButton handleClick={openModal} variant="contained">
				Click to Open Modal
			</MUIButton>

			<MUIModal
				open={open}
				handleClose={closeModal}
				handleItems={handleAddItems}
				sidenav={<SideNav />}
				actualcontent={<DialogBody />}
			/>
		</>
	);
};

export default CustomDeskModal;

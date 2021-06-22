import React from "react";
import MUIDialogPopup from "../../reusable/materialui/MUIDialogPopup";
import MUIButton from "../../reusable/materialui/MUIButton";
import DialogBody from "./DialogBody";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

export const ButtonActions = (props) => {
	const { closeModal, handleAddItems } = props;
	return (
		<>
			<MUIButton handleClick={closeModal}>cancel</MUIButton>
			<MUIButton handleClick={handleAddItems}>Add</MUIButton>
		</>
	);
};

export const MUIDialogTitle = (props) => {
	const { children, onClose } = props;
	return (
		<div style={{ display: "flex" }}>
			<div style={{ flex: "9" }}>
				<Typography variant="h6">{children}</Typography>
			</div>
			<div style={{ flex: "1" }}>
				{onClose ? (
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				) : null}
			</div>
		</div>
	);
};

const CustomDeskDialog = () => {
	const [open, setOpen] = React.useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const handleAddItems = () => {
		alert("inside add itens");
	};

	return (
		<div>
			<MUIButton handleClick={openModal}>Click to open Modal</MUIButton>
			{open && (
				<MUIDialogPopup
					open={open}
					handleClose={closeModal}
					title={
						<MUIDialogTitle onClose={closeModal}>customize Desk</MUIDialogTitle>
					}
					actions={
						<ButtonActions
							closeModal={closeModal}
							handleAddItems={handleAddItems}
						/>
					}
				>
					<DialogBody />
				</MUIDialogPopup>
			)}
		</div>
	);
};

export default CustomDeskDialog;

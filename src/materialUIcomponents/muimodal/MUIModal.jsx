import React from "react";
import Modal from "@material-ui/core/Modal";
import MUIButton from "../../reusable/materialui/MUIButton";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import "./muimodal.css";

const ModalBody = styled.div`
	display: flex;
`;

const ModalFooter = styled.div`
	flex: 0 0 auto;
	display: flex;
	padding: 8px;
	align-items: center;
	justify-content: flex-end;
`;

export const DialogHeader = (props) => {
	const { children, onClose } = props;
	return (
		<MuiDialogTitle disableTypography className="muidialogtitle">
			<Typography variant="h6" className="titletypo">
				{children}
			</Typography>
			{onClose ? (
				<IconButton aria-label="close" className="crossicon " onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
};

const MUIModal = (props) => {
	const { open, handleClose, sidenav, actualcontent, handleItems } = props;
	console.log("props are", props);
	return (
		<Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}>
			<DialogHeader onClose={handleClose}>select Custom Items</DialogHeader>

			{/* <MuiDialogContent>
				<ModalBody className="modalbody">
					<div className="modalsidenav">{sidenav}</div>
					<div className="modalactualcontent">{actualcontent}</div>
				</ModalBody>
			</MuiDialogContent>

			<MuiDialogActions>
				<MUIButton handleClick={handleClose}>Cancel</MUIButton>
				<MUIButton handleClick={handleItems}>Add</MUIButton>
			</MuiDialogActions> */}
			<ModalBody className="modalbody">
				<div className="modalsidenav">{sidenav}</div>
				<div className="modalactualcontent">{actualcontent}</div>
			</ModalBody>
			<ModalFooter>
				<MUIButton handleClick={handleClose}>Cancel</MUIButton>
				<MUIButton handleClick={handleItems}>Add</MUIButton>
			</ModalFooter>
		</Dialog>
	);
};

export default MUIModal;

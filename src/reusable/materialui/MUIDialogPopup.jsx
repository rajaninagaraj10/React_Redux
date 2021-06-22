import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import SideNav from "../../materialUIcomponents/modal/SideNav";

// const DialogWrapper = styled.div`
// 	display: flex;
// 	width: 900px;
// 	height: 80%;
// `;

// const Menutab = styled.div`
// 	flex: 2;
// `;

// const TabContent = styled.div``;

// const ContentWrapper = styled.div`
// 	flex: 3;
// `;

// const Actionarea = styled.div``;

const MUIDialogPopup = (props) => {
	const { title, children, open, handleClose, actions } = props;
	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				// aria-labelledby="scroll-dialog-title"
				// aria-describedby="scroll-dialog-description"
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent dividers>{children}</DialogContent>
				<DialogActions>{actions}</DialogActions>
			</Dialog>
		</>
	);
};

export default MUIDialogPopup;

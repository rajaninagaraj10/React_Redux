import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Modal, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		// position: "absolute",
		// width: 400,
		// backgroundColor: theme.palette.background.paper,
		// border: "2px solid #000",
		// boxShadow: theme.shadows[5],
		// padding: theme.spacing(2, 4, 3),

		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
	},
	containerCenter: {
		position: "fixed",
		top: "50%",
		left: "50%",
	},
}));

const ModalSample = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const ModalBody = (
		<div className={classes.paper}>
			<Typography variant="h6" id="simple-modal-title">
				Modal Header
			</Typography>
			<section id="simple-modal-description">Modal Body</section>
		</div>
	);

	return (
		<div>
			<Grid container className={classes.containerCenter}>
				<Grid item>
					<div>
						<button onClick={handleOpen}>click</button>
					</div>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{ModalBody}
					</Modal>
				</Grid>
			</Grid>
		</div>
	);
};

export default ModalSample;

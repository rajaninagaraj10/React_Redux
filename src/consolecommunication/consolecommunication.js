import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ConsoleModal from "./ConsoleModal";

const consoleStyles = makeStyles({
	consoleBtn: {
		position: "fixed",
		bottom: 0,
		right: "30px",
		width: "425px",
		border: "1px solid black",
		borderRadius: "10px 10px 0 0",
		minHeight: "55px",
		backgroundColor: "#4187f7",
		color: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textTransform: "uppercase",
		marginRight: "20px",
	},
	consoleBtnModal: {
		height: "300px",
		position: "relative",
		left: "100px",
		top: " 60px",
		maxWidth: "1060px",
		height: "300px",
		border: "1px solid red",
		marginTop: "100px",
		marginBottom: "20px",
	},
});

const ConsoleCommunication = () => {
	const [consoleOpen, setConsoleOpen] = React.useState(false);
	const handleExpand = () => {
		setConsoleOpen(true);
	};

	const classes = consoleStyles();
	return (
		<div>
			{consoleOpen ? (
				<div className={classes.consoleBtnModal}>
					<ConsoleModal />
				</div>
			) : (
				<div className={classes.consoleBtn}>
					<Button endIcon={<ExpandLessIcon />} onClick={handleExpand}>
						Messenger
					</Button>
				</div>
			)}
		</div>
	);
};

export default ConsoleCommunication;

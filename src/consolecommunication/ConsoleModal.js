import { Button, Grid, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PresentationStyles = makeStyles({
	messengerHeader: {
		backgroundColor: "#4187f7",
		minHeight: "50px",
		borderRadius: "10px 10px 0 0",
	},
	button: {
		color: "white",
	},
	chatheader: {
		minWidth: "286px",
		backgroundColor: "#f7f7f7",
	},
});

const ConsoleModal = () => {
	const classes = PresentationStyles();
	return (
		<div>
			<Grid container>
				<Grid item container xs={12} className={classes.messengerHeader}>
					<Grid item xs={10}>
						<Typography variant="h5" component="div">
							Messenger
						</Typography>
					</Grid>
					<Grid item xs={2} className={classes.button}>
						<Button endIcon={<ExpandMoreIcon />}></Button>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<div className={classes.charheader}>chat header</div>
					<div className={classes.groupMembers}>group memebers</div>
				</Grid>
				<Grid itemxs={8}>chat communication</Grid>
			</Grid>
		</div>
	);
};

export default ConsoleModal;

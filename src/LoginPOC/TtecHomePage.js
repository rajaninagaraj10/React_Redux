import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ttecLogo from "../assets/images/ttec-hn-logo.svg";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";
import { StyledLoginButton, homeStyles } from "../styles";

const TtecHomePage = () => {
	let history = useHistory();
	const routerChange = () => {
		let path = `/welcomepage`;
		history.push(path);
	};

	const classes = homeStyles();

	return (
		<div className={classes.homebgImage}>
			<main className={classes.homeLogin}>
				<Grid container justify="center">
					<Grid item>
						<section className={classes.hometteclogo}>
							<img src={ttecLogo} alt="" />
						</section>
						<Typography variant="h6" className={classes.homelogodesc}>
							Humanify Neighbourhood
						</Typography>
						<section>
							<StyledLoginButton
								data-testid="loginButton"
								endIcon={<SendIcon />}
								onClick={routerChange}
							>
								User Login
							</StyledLoginButton>
						</section>
						<Typography variant="subtitle2" style={{ padding: "10px" }}>
							<a href="https://help.ttec.com">I need help Logging in</a>
						</Typography>
					</Grid>
				</Grid>
			</main>
		</div>
	);
};

export default TtecHomePage;

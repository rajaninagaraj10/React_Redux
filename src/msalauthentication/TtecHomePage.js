import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ttecLogo from "../assets/images/ttec-hn-logo.svg";
import SendIcon from "@material-ui/icons/Send";
import { StyledLoginButton, homeStyles } from "../styles";
import data from "../config.json";
import { useMsal } from "@azure/msal-react";

const request = {
	scopes: [data.AzureRequestScope],
};

const TtecHomePage = () => {
	const { instance } = useMsal();
	const routerChange = () => {
		instance.loginRedirect(request).then((response) => {
			// console.log(JSON.stringify(response));
			localStorage.setItem("access-token", response.accessToken);
		});
	};

	const classes = homeStyles();

	return (
		<div className={classes.homebgImage}>
			<main className={classes.homeLogin}>
				<Grid container justify="center">
					<Grid item>
						<section className={classes.hometteclogo}>
							<img src={ttecLogo} />
						</section>
						<Typography variant="h6" className={classes.homelogodesc}>
							Humanify Neighborhood
						</Typography>
						<section>
							<StyledLoginButton endIcon={<SendIcon />} onClick={routerChange}>
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

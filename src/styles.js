import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ttecbgImage from "./assets/images/bg-login.jpg";

export const StyledLoginButton = styled(Button)`
	background-color: #fa6834;
	padding: 0 14px;
	color: #fff;
	cursor: pointer;
	min-height: 48px;
	border-radius: 24px;
	font-size: 17px;
	width: 200px;
	text-transform: uppercase;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: white;
		color: #fa6834;
		border: 1px solid #fa6834;
	}
`;

export const homeStyles = makeStyles({
	homebgImage: {
		backgroundImage: `url(${ttecbgImage})`,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundPosition: "center center",
	},
	homeLogin: {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "hsla(0,0%,100%,.95)",
		borderRadius: "15px",
		padding: "45px",
		margin: "auto 20px",
	},
	hometteclogo: {
		height: "59px",
	},
	homelogodesc: {
		color: " #fa6834",
		paddingTop: " 15px",
		paddingBottom: " 50px",
	},
});

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import data from "./config.json";



// const configuration = {
//     clientId: data.AzureClientID,
//   auth: {
//     redirectUri: data.AzureRedirectURI,
//     knownAuthorities: [data.AzureAuthority],
//     authority: data.AzureAuthority,
//   },
//   cache: {
//     cacheLocation: 'localStorage',
//   },
// };

// const pca = new PublicClientApplication(configuration);

ReactDOM.render(
	// <MsalProvider instance={pca}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </MsalProvider>
,	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

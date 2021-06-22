import React from "react";
import { Switch, Route } from "react-router-dom";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import LoginForm from "../LoginPOC/LoginForm";
import WelcomePage from "../LoginPOC/WelcomePage";

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={TtecHomePage} />
				<Route path="/login" exact component={LoginForm} />
				<Route path="/welcomepage" exact component={WelcomePage} />
			</Switch>
		</div>
	);
};

export default Routes;

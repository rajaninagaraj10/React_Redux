import Routes from "../Routes/Routes";
import { render, screen } from "@testing-library/react";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import LoginForm from "../LoginPOC/LoginForm";
import WelcomePage from "../LoginPOC/WelcomePage";
import { MemoryRouter } from "react-router-dom";

let pathMap = {};

describe("route component", () => {
	test("should show TtecHomePage for / router (getting array of routes)", () => {
		const { container } = render(
			<MemoryRouter initialentries="{['/']}">
				<Routes />
			</MemoryRouter>
		);

		screen.debug();

		// pathMap = container.querySelector("Route").reduce((pathMap, route) => {
		// 	const routeProps = route.props();
		// 	const routeComponent = routeProps.component;
		// 	pathMap[routeProps.path] = routeComponent;
		// 	return pathMap;
		// }, {});
		// console.log("pathMap is2----", pathMap);
	});

	test("should show TtecHomePage for / router (getting array of routes)1", () => {
		console.log("------------------------------");
		// expect(pathMap["/"]).toBe(TtecHomePage);
	});

	it("should show LoginForm for /login router (getting array of routes)", () => {
		expect(pathMap["/login"]).toBe(LoginForm);
	});
	it("should show WelcomePage for /welcomepage router (getting array of routes)", () => {
		expect(pathMap["/welcomepage"]).toBe(WelcomePage);
	});
});

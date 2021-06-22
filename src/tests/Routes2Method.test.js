import Routes from "../Routes/Routes";
import { shallow, mount } from "enzyme";
import { Route } from "react-router-dom";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import LoginForm from "../LoginPOC/LoginForm";
import WelcomePage from "../LoginPOC/WelcomePage";

let pathMap = {};

describe("router testing using array of routers", () => {
	beforeAll(() => {
		const wrapper = shallow(<Routes />);
		pathMap = wrapper.find(Route).reduce((pathMap, route) => {
			const routeProps = route.props();
			const routeComponent = routeProps.component;
			pathMap[routeProps.path] = routeComponent;
			return pathMap;
		}, {});
		// console.log("pathMap is2----", pathMap);
	});

	it("should show TtecHomePage for / router (getting array of routes)", () => {
		expect(pathMap["/"]).toBe(TtecHomePage);
	});

	it("should show LoginForm for /login router (getting array of routes)", () => {
		expect(pathMap["/login"]).toBe(LoginForm);
	});
	it("should show WelcomePage for /welcomepage router (getting array of routes)", () => {
		expect(pathMap["/welcomepage"]).toBe(WelcomePage);
	});
});

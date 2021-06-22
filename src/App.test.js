import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Routes from "./Routes/Routes";
import WelcomePage from "./LoginPOC/WelcomePage";

describe("App Component", () => {
	test("to find if the Route Component is present inside it.", () => {
		const component = shallow(<App />);
		console.log(component.debug());
		//1st way to find component
		const output = component.contains(<Routes />);
		expect(output).toBe(true);
		//second way to find component
		expect(component.find(Routes)).toHaveLength(1);
	});
});

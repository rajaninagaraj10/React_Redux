import { shallow } from "enzyme";
import Welcome from "../testcomponents/passpropsandtestcomponents";
import { screen, render } from "@testing-library/react";
describe("passing props and testing components", () => {
	test("has correct welcome text using Enzyme", () => {
		const wrapper = shallow(<Welcome firstName="John" lastName="Doe" />);
		expect(wrapper.find("h1").text()).toequal("Welcome, John Doe");
	});

	test("has correct welcome text using RTL", () => {
		render(<Welcome firstName="John" lastName="Doe" />);
		expect(screen.getByRole("heading")).toHaveTextContent("Welcome, John Doe");
	});
});

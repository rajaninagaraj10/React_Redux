import { mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import ReactDOM from "react-dom";

describe("component render", () => {
	test("to find if the component is rendered", () => {
		render(<TtecHomePage />);
		const output = screen.getByText("User Login");
		expect(output).toBeInTheDocument();
	});
	it("should render component without crashing with RTL", () => {
		const divElement = document.createElement("div");
		ReactDOM.render(<TtecHomePage />, divElement);
		ReactDOM.unmountComponentAtNode(divElement);
	});

	it("Expects to find button text before click of login button", () => {
		const wrapper = mount(<TtecHomePage />);
		expect(wrapper.text().includes("User Login")).toBe(true);
	});
});

import { mount, shallow } from "enzyme";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import { screen, render } from "@testing-library/react";

describe("to find Text", () => {
	it("Expects to find button text before click of login button", () => {
		const wrapper = mount(<TtecHomePage />);
		expect(wrapper.text().includes("User Login")).toBe(true);
	});

	test("to find if the component is rendered", () => {
		render(<TtecHomePage />);
		const output = screen.getByText(/user login/i);
		expect(output).toBeInTheDocument();
	});
});

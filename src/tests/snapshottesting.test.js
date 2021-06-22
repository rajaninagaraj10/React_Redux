import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { App } from "../App";
describe("snapshottesting", () => {
	test("snapshot testing using enzyme", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	test("snapshot testing using React library", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});
});

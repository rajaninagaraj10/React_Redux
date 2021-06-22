import { shallow, mount } from "enzyme";
import { render, screen } from "@testing-library/react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
describe("test cases for button click", () => {
	test("how mount works", () => {
		const wrapper = mount(<Component1 />);
		console.log(wrapper.debug());
		const output = wrapper.containsMatchingElement(<Component2 />);
		expect(output).toEqual(true);
		const stringOutput = wrapper.find("Component2").html();
		expect(stringOutput).toContain("component2");
	});
	test("how shallow works", () => {
		const wrapper = shallow(<Component1 />);
		console.log(wrapper.debug());
		const output = wrapper.containsMatchingElement(<Component2 />); //To check if child Element is rendered
		const stringOutput = wrapper.find("Component2").html(); //to get the html structure
		console.log("stringOutput", stringOutput);
		expect(output).toEqual(true);
		expect(stringOutput).toContain("component2"); //checking if text is present in the child Element
	});
	test("how render works", () => {
		const { debug } = render(<Component1 />);
		console.log("output is", debug());
		const output = screen.getByText("component2");

		expect(output).toBe("component2");
	});
});

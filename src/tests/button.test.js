import React from "react";
import { shallow } from "enzyme";
import Button from "../LoginPOC/Button";
import { render, screen, fireEvent } from "@testing-library/react";

const ButtonCap = ({ onclick, children }) => (
	<button onClick={onclick}>{children}</button>
);

describe("Burron component", () => {
	debugger;
	test("Existence of Button using Jest", () => {
		const wrapper = shallow(<Button />);
		const btn = wrapper.find("#button");
		expect(btn).toBeTruthy();
	});
	test("Existence of Button using React Testing Library", () => {
		const { queryByTestId } = render(<Button />);
		const btn1 = queryByTestId("button1");
		screen.debug(btn1);
		expect(btn1).toBeTruthy();
	});

	test("To Capture Button Click By React library", () => {
		debugger;
		const mockhandleClick = jest.fn();
		render(<ButtonCap onClick={mockhandleClick}>Click Me</ButtonCap>);
		fireEvent.click(screen.getByText(/Click Me/));
		expect(mockhandleClick).toHaveBeenCalledTimes(1);
	});
	test("To Capture Button Click by jest", () => {
		const mockhandleClick = jest.fn();
		const wrapper = shallow(<button onClick={mockhandleClick} />);
		const btn = wrapper.find("button");
		btn.simulate("click");
		expect(mockhandleClick.mock.calls.length).toEqual(1);
		expect(mockhandleClick).toHaveBeenCalledTimes(1);
	});
});

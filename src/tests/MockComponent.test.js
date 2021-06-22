import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "../LoginPOC/LoginForm";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

describe("How to mock components", () => {
	it("should render component without crashing with RTL", () => {
		const divElement = document.createElement("div");
		ReactDOM.render(<LoginForm />, divElement);
		ReactDOM.unmountComponentAtNode(divElement);
	});

	it("should render component without crashing with Enzyme", () => {
		const wrapper = shallow(<LoginForm />);
		console.log(wrapper.debug());
	});
});

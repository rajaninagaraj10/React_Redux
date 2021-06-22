import { render, screen, container } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import App from "../App";

describe("To Debug", () => {
	test("using Enzyme", () => {
		const component = shallow(<App />);
		console.log(component.debug());
		console.log(component.html()); //gives html structure
		//console.log("container---", container);
	});

	test("using React library", () => {
		render(<App />);
		screen.debug();
	});
});

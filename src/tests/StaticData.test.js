import { render, screen } from "@testing-library/react";
import StaticData from "../components/StaticData";

describe("Test case To render 'static data' ", () => {
	test("renders heading1 text", () => {
		//arrange
		render(<StaticData />);

		//assert
		const heading1Element = screen.getByText("heading1 text");
		expect(heading1Element).toBeInTheDocument();
	});
	test("renders paragraph text", () => {
		//arrange
		render(<StaticData />);

		//assert
		const paragraphElement = screen.getByText("paragraph Text", {
			exact: false,
		});
		expect(paragraphElement).toBeInTheDocument();
	});
});

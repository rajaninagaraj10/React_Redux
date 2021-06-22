import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Events from "../components/Events";

describe("render userEvents testcase", () => {
	test('renders "content before clicking the button" text', () => {
		render(<Events />);

		const beforeClick = screen.getByText("content before clicking the button");
		expect(beforeClick).toBeInTheDocument();
	});

	test('renders "content after button click" text', () => {
		render(<Events />);

		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

		const afterButtonClick = screen.getByText("content after button click");
		expect(afterButtonClick).toBeInTheDocument();
	});

	test('renders  "content before clicking the button" not to be shown after clicking the button', () => {
		render(<Events />);

		const buttonElement = screen.getByRole("button");

		userEvent.click(buttonElement);

		const outPutElement = screen.queryByText(
			"content before clicking the button"
		);

		expect(outPutElement).toBeNull();
	});
});

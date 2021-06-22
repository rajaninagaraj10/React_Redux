import { render, screen, fireEvent } from "@testing-library/react";
import TtecHomePage from "./TtecHomePage";

const Button = ({ onClick, children }) => (
	<button onClick={onClick}>{children}</button>
);

describe("TtecHomePage Component", () => {
	test("to find the logo caption text", () => {
		render(<TtecHomePage />);
		const output = screen.getByText("Humanify Neighbourhood", { exact: true });
		expect(output).toBeInTheDocument();
	});

	test("to mock button click,", () => {
		const mockhandleClick = jest.fn();
		render(<Button onClick={mockhandleClick}>User Login</Button>);
		fireEvent.click(screen.getByText(/User Login/i));
		expect(mockhandleClick).toHaveBeenCalledTimes(1);
	});

	test("to check the login help link", () => {
		render(<TtecHomePage />);
		expect(
			screen.getByText(/I need help Logging in/i).closest("a")
		).toHaveAttribute("href", "https://help.ttec.com");
	});
});

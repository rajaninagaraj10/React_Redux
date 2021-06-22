import { ExpansionPanelActions } from "@material-ui/core";
import { jssPreset } from "@material-ui/styles";

function greetWorld(greettingFn) {
	return greettingFn("world");
}
test("greetworld calls the greeting function properly", () => {
	const greetImplementation = (name) => `hey ${name}`;
	const mockFn = jest.fn(greetImplementation);
	const value = greetWorld(mockFn);
	expect(mockFn).toHaveBeenCalled();
	expect(mockFn).toHaveBeenCalledWith("world");
	expect(value).toBe("hey world");
});

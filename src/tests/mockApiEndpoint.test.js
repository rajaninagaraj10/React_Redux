const axios = require("axios");
jest.mock("axios");
describe("mocking API Endpoint ", () => {
	test("mock API Endpoint using simple javascript", () => {
		const responseData = { data: { userId: 1, id: 1 } };
		axios.get.mockResolvedValue(responseData);
		const app = require("../mocking/mockusingjs.test");

		app.getData();
	});
});

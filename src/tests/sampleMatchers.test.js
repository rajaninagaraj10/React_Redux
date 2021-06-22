describe("sample tests", () => {
	const sum = (a, b) => {
		return a + b;
		s;
	};

	test("matcher to test equality - toBe", () => {
		const output = sum(2, 5);

		expect(output).toBe(7);
	});
	test("matcher to test opposite - not", () => {
		const output = sum(2, 5);
		console.log("output is", output);

		expect(output).not.toBe(0);
	});
	test("matcher to test object equality - toEqual", () => {
		const obj = {
			name: "rajani",
			age: 30,
		};

		expect(obj).toEqual({ name: "rajani", age: 30 });
	});

	test("to test null undefined and 0", () => {
		const n = null;
		expect(n).toBeNull();
		//expect(n).not.toBeNull();
		expect(n).not.toBeUndefined();
		expect(n).not.toBeTruthy();
		expect(n).toBeFalsy();
	});
	test("zero", () => {
		const z = 0;
		expect(z).not.toBeNull();
		expect(z).toBeDefined();
		expect(z).not.toBeUndefined();
		expect(z).not.toBeTruthy();
		expect(z).toBeFalsy();
	});
});

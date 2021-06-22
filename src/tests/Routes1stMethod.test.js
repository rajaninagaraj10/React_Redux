import { shallow, mount } from "enzyme";
import Routes from "../Routes/Routes";
import { Route } from "React-router-dom";
import { MemoryRouter } from "react-router";
import TtecHomePage from "../LoginPOC/TtecHomePage";
import LoginForm from "../LoginPOC/LoginForm";
describe("routes using memory router ", () => {
	test(" to find the total number of Route statments present", () => {
		const component = shallow(<Routes />);
		console.log(component.debug());
		expect(component.find(Route)).toHaveLength(3);
	});
	it("should find TtecHomePage component for default router(/) - using memory router", () => {
		const component = mount(
			<MemoryRouter initialentries="{['/']}">
				<Routes />
			</MemoryRouter>
		);
		expect(component.find(TtecHomePage)).toHaveLength(1);
	});
	it("should find LoginForm component for path (/login) - using memory router", () => {
		const component = mount(
			<MemoryRouter initialentries="{['/login']}">
				<Routes />
			</MemoryRouter>
		);
		expect(component.find(LoginForm)).toHaveLength(1);
	});
});

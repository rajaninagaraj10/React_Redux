import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MovieContainer from "./MovieContainer";

const Navtop = () => {
	const [navTop, setNavTop] = React.useState([]);
	React.useEffect(() => {
		fetch("./NavTop.json")
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				setNavTop(data);
			});
	}, []);

	console.log(navTop);

	return (
		<>
			{navTop &&
				[navTop].map((i) =>
					i.defaultName === "Global"
						? i.childConfigs.map((j) =>
								j.defaultName === "Top Navigation"
									? j.childConfigs.map((itemLink) => (
											<div key={itemLink.appConfigId} className="item">
												<Router>
													<Route path="/my" component={MovieContainer} />
													<Link to="/my" className="bttn-nav">
														<span className="ico">
															<span
																className={`${itemLink.assignmentValues.Icon}`}
															/>
														</span>
														{itemLink.assignmentValues.Item}
													</Link>
												</Router>
											</div>
									  ))
									: null
						  )
						: null
				)}
		</>
	);
};

export default Navtop;

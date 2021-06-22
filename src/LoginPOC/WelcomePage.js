import ConsoleCommunication from "../consolecommunication/consolecommunication";

const WelcomePage = (props) => {
	console.log("props in welcome page", props);
	return (
		<div data-testid="welcomepage">
			welcomePage
			<ConsoleCommunication />
		</div>
	);
};

export default WelcomePage;

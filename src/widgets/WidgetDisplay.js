import React from "react";
import styled from "styled-components";
import WidgetContent from "./WidgetContent";

const Widgetwrapper = styled.div`
	width: 250px;
	min-height: 150px;
	border: 1px solid red;
	border-radius: 25px;
	position: fixed;
	top: 25%;
	left: 40%;
`;

const Widgetheader = styled.div`
	height: 50px;
	display: flex;
	.widgeticon {
		flex: 1;
		color: green;
	}
	.widgetname {
		flex: 2;
	}
`;

const WidgetDisplay = (props) => {
	const { onclick } = props;
	return (
		<>
			<Widgetwrapper>
				<Widgetheader>
					<div className="widgeticon">icon</div>
					<button className="widgetname" onClick={onclick}>
						Add Widget
					</button>
				</Widgetheader>
				<hr style={{ width: "10px" }} />
				<WidgetContent />
			</Widgetwrapper>
		</>
	);
};

export default WidgetDisplay;

import React from "react";

import styled from "styled-components";

const WidgetStyledContent = styled.div`
	height: 150px;
`;

const WidgetContent = () => {
	return (
		<WidgetStyledContent>
			<div>Link1</div>
			<div>Link2</div>
			<div>Link3</div>
		</WidgetStyledContent>
	);
};

export default WidgetContent;

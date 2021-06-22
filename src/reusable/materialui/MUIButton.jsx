import React from "react";
import Button from "@material-ui/core/Button";

const MUIButton = (props) => {
	const { children, variant, handleClick, ...others } = props;
	return (
		<>
			<Button variant={variant} {...others} onClick={handleClick}>
				{children}
			</Button>
		</>
	);
};

export default MUIButton;

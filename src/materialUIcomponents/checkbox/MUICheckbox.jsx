import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
export const data = [
	"apple",
	"kiwi",
	"banana",
	"lime",
	"orange",
	"grape",
	"apple",
];

const MUICheckbox = () => {
	const [checked, setChecked] = useState([]);

	const handleCheck = (event) => {
		const { value } = event.target;
		setChecked(
			checked.includes(value)
				? checked.filter((c) => c !== value)
				: [...checked, value]
		);
	};

	return (
		<div>
			{data.map(({ value }) => (
				<Checkbox
					onChange={(e) => handleCheck(e)}
					checked
					{...checked.includes(value)}
				/>
			))}
		</div>
	);
};

export default MUICheckbox;

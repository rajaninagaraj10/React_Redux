import React from "react";
import menu from "./menu";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const imgdiv = {
	position: "relative",
	width: " 200px",
	height: "200px",
	margin: "10px",
	borderRadius: " 10px",
	overflow: "hidden",
};

const radiobtn = {
	display: "none",
	position: "absolute",
	top: "12px",
	right: "15px",
	width: "28px",
	height: "28px",
	borderRadius: "50%",
	border: "1px solid #f1f2f3",
	backgroundColor: "#fff",
};

const img = {
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
};

const adjust = {
	margin: "10px",
};

const DialogBody = () => {
	const { category } = useSelector((state) => state.customdesk);

	return (
		<>
			{menu &&
				menu.map((item, i) => (
					<>
						{item.type === "menu-items"
							? item.components.map((menulist, j) => (
									<>
										{menulist.category === category
											? menulist.items.map((list, k) => (
													<div style={adjust}>
														<img src={list.imageUrl} alt="" style={img} />
														<div style={radiobtn}></div>
													</div>
											  ))
											: null}
									</>
							  ))
							: null}
					</>
				))}
		</>
	);
};

export default DialogBody;

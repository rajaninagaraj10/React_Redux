import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../redux/customdesk/CustomDeskActions";

const SideNav = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.customdesk);

	const handleCategory = (menucategory) => {
		dispatch(updateCategory(menucategory));
		console.log(updateCategory);
	};
	return (
		<>
			<MenuList>
				{items &&
					items.map((item, index) => (
						<div>
							{item.type === "menu-items" &&
								item.components.map((menulist, i) => (
									<MenuItem onClick={() => handleCategory(menulist.category)}>
										{menulist.category}
									</MenuItem>
								))}
						</div>
					))}
			</MenuList>
		</>
	);
};

export default SideNav;

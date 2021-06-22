import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import React from "react";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import MovieContainer from "./components/MovieContainer";
import Navtop from "./components/Navtop";
import CounterContainer from "./components/CounterContainer";
import TypographyExample from "./materialUIcomponents/TypographyExample";
import TtecHomePage from "./LoginPOC/TtecHomePage";
import PaperExample from "./materialUIcomponents/PaperExample";
import { BrowserRouter } from "react-router-dom";
import ModalSample from "./modal/ModalSample";
import Routes from "./Routes/Routes";
import Button from "./LoginPOC/Button";
import WidgetDisplay from "./widgets/Widget";
import Mydesk from "./modal/Mydesk";
import DragReactDraggable from "./reactdraggable/DragReactDraggable";
// import CustomDeskModal from "./reactmodal/CustomDeskModal";
import Modal from "react-modal";
import BasicModal from "./reactmodal/BasicModal";
import CustomDeskDialog from "./materialUIcomponents/modal/CustomDeskDialog.jsx";
import Sample from "./materialUIcomponents/modal/sample";
import CustomDeskModal from "./materialUIcomponents/muimodal/CustomDeskModal";
import MUICheckbox from "./materialUIcomponents/checkbox/MUICheckbox";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					{/* <CakeContainer /> */}
					{/* <IceCreamContainer /> */}
					{/* <MovieContainer /> */}
					{/* <Navtop/> */}
					{/* <CounterContainer /> */}
					{/* <TypographyExample/> */}
					{/* <PaperExample/> */}
					{/* <ModalSample/> */}
					{/* <Routes/> */}
					{/* <Button/> */}
					{/* <WidgetDisplay /> */}
					{/* <Mydesk       /> */}
					{/* <DragReactDraggable       /> */}
					{/* <CustomDeskModal       /> */}
					{/* <BasicModal/> */}
					{/* <CustomDeskDialog /> */}
					{/* <Sample/> */}
					{/* <CustomDeskModal       /> */}
					<MUICheckbox       />
				</div>
			</Provider>
		</BrowserRouter>
	);
}

export default App;

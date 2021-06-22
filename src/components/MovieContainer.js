// import React from "react";
// import { connect } from "react-redux";
// import "../App.css";
// import {
// 	asyncFetchData,
// 	fetchByRank,
// 	fetchByReleaseDate,
// 	modalImage,
// } from "../redux/movies/movieActions";
// import Select from "../widgets/Select";

// import { Card, Container, Row, Col } from "react-bootstrap";

// const MovieContainer = (props) => {
// 	const {
// 		jsonData,
// 		modalIsOpen,
// 		fetchData,
// 		fetchByRank,
// 		fetchByReleaseDate,
// 		modalImage,
// 	} = props;
// 	React.useEffect(() => {
// 		fetchData();
// 	}, [fetchData]);
// 	console.log("state is updated", jsonData);

// 	const handleSelect = (e) => {
// 		const value = e.target.value;
// 		console.log("value is", value);
// 		switch (value) {
// 			case "releaseDate":
// 				fetchByReleaseDate();
// 				break;
// 			case "rank":
// 				fetchByRank();
// 				break;
// 			default:
// 				fetchData();
// 		}
// 	};

// 	const handleClick = () => {
// 		console.log("inside handle onClick");

// 		modalImage();
// 	};

// 	return (
// 		<Container>
// 			<h3>Movie Container</h3>
// 			<Row>
// 				<Col>
// 					<Select handleSelect={handleSelect} />
// 				</Col>
// 			</Row>

// 			{jsonData.loading ? (
// 				<h1>Loading</h1>
// 			) : jsonData.error ? (
// 				<h2>{jsonData.error}</h2>
// 			) : (
// 				<div>
// 					{jsonData &&
// 						jsonData.data &&
// 						[jsonData.data].map((item) => (
// 							<>
// 								<h3>{item.type}</h3>
// 								{item.components.map((SubItem, index) => (
// 									<Row key={index}>
// 										{SubItem.type === "movie-list" ? (
// 											SubItem.items.map((movielist, index) => (
// 												<Col
// 													key={index}
// 													sm={8}
// 													md={6}
// 													lg={4}
// 													onClick={handleClick}
// 												>
// 													<Card style={{ width: "10rem" }}>
// 														<Card.Img variant="top" src={movielist.imageUrl} />
// 														<Card.Body>
// 															<Card.Title>
// 																{`Title ${movielist.title}`}
// 															</Card.Title>
// 															<Card.Text>
// 																{`ReleaseDate- ${movielist.releaseDate}`}
// 															</Card.Text>
// 															<Card.Text>{`Rank ${movielist.rank}`}</Card.Text>
// 														</Card.Body>
// 													</Card>
// 												</Col>
// 											))
// 										) : (
// 											<div>{null}</div>
// 										)}
// 									</Row>
// 								))}
// 							</>
// 						))}
// 				</div>
// 			)}
// 		</Container>
// 	);
// };

// const mapStateToProps = (state) => {
// 	return {
// 		jsonData: state.data,
// 		modalIsOpen: state.data.modalIsOpen,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		fetchData: () => dispatch(asyncFetchData()),
// 		fetchByRank: () => dispatch(fetchByRank()),
// 		fetchByReleaseDate: () => dispatch(fetchByReleaseDate()),
// 		modalImage: () => dispatch(modalImage()),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

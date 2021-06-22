import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
	width: 400p;
	min-height: 400px;
	border: 1px solid grey;
`;
const ModalHeader = styled.div``;
const Modalcontent = styled.div``;
const Modalfooter = styled.div``;

const ModalPopup = () => {
	return (
		<>
			<ModalWrapper>
				<ModalHeader>MHeader</ModalHeader>
				<Modalcontent>M content</Modalcontent>
				<Modalfooter>M footer</Modalfooter>
			</ModalWrapper>
		</>
	);
};
export default ModalPopup;

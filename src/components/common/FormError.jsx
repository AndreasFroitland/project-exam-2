import PropTypes from "prop-types";
import styled from "styled-components";

export default function ValidationError({ children }) {
	return <StyleError className="form-error">{children}</StyleError>;
}

ValidationError.proptTypes = {
	children: PropTypes.node.isRequired,
};

const StyleError = styled.div`
    color: #E34234;
	font-size: .8rem;
    font-family: sans-serif;
	font-weight: 900;
	padding: .5rem;
	background-color: #E5E4E2;
	border-radius: .5rem;
	width: 95%;
	margin: 0 auto;
`;
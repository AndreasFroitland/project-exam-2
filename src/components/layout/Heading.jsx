import PropTypes from "prop-types";
import styled from "styled-components";

function Heading({ size = "1", content }) {
	const VariableHeading = `h${size}`;

	return <VariableHeading>{content}</VariableHeading>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default Heading;

// Heading style
export const StyleHeading = styled.div`
    color: #000;
	padding: .5rem;
	margin: 0;
    font-size: .8rem;
    font-family: sans-serif;
	letter-spacing: 0.15rem;
    font-weight: 700;
`;
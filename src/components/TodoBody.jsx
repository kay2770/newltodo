import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 600px;
	border: 1px solid #fff766;
	box-sizing: border-box;
`;

const TodoBody = ({ children }) => {
	return <Section>{children}</Section>;
};

export default TodoBody;

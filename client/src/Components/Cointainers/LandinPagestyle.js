import styled from "styled-components";

export const Button = styled.button`
	background: #3498db;
	background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
	background-image: -o-linear-gradient(top, #3498db, #2980b9);
	background-image: linear-gradient(to bottom, #3498db, #2980b9);
	border-radius: 28px;
	font-family: font-family: 'Poppins', sans-serif;
	color: #ffffff;
	font-size: 25px;
	padding: 10px 20px 10px 20px;
	text-decoration: none;

	&:hover {
		cursor: pointer;
		background: #3cb0fd;
		background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
		background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
		background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
		text-decoration: none;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

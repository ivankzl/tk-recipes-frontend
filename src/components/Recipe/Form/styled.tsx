import styled from 'styled-components'


const Wrapper = styled.section`
  padding: 1em;
`;

const FormGroup = styled.div`
	color: rgb(9, 7, 20);
  display: block;
	width: 300px;
	margin: 5px ;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: #181a3b;
  display: block;
	font-weight: bold;
`;

const LabelIngredient = styled.label`
	margin-bottom: 0.5em;
	color: #1d1d1d;
  display: block;
`;

const Input = styled.input`
	padding: 0.5em;
	color: #000000;
	background: #d5ddff;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const ErrorContainer = styled.div`
	padding: 0.5em;
	color: #000000;
	background: #fccabb;
	border: 1px red;
	border-radius: 3px;
	width: 50%;
	margin-bottom: 1em;
`;


const ErrorMessage = styled.div`
	padding: 0.5em;
	color: red;
`;


export { Wrapper, FormGroup, Label, LabelIngredient, Input, ErrorContainer, ErrorMessage };
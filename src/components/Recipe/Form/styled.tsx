// @ts-ignore
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
	color: #000000;
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


export { Wrapper, FormGroup, Label, Input };
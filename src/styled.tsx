// @ts-ignore
import styled from 'styled-components'


const Button = styled.button`
  display: inline-block;
  color: #4757b1;
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 0.5em;
  border: 2px solid #4757b1;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
`;

const ButtonEdit = styled(Button)`
  border: 2px solid #273064;
  color: #273064;
  :hover{
    color: white;
    background-color: #4a5594;
  }
`;

const ButtonSubmit = styled(Button)`
  border: 2px solid #255c33;
  color: #255c33;
  :hover{
    color: white;
    background-color: #255c33;
  }
`;

const ButtonDelete = styled(Button)`
  color: #962323;
  border: 2px solid #962323;
  :hover{
    color: white;
    background-color: #962323;
  }
`;

export { Button, ButtonSubmit, ButtonEdit, ButtonDelete }
import  React from 'react';
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react"  
import styled from 'styled-components'
 
const bc = 'button'



interface Props
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  buttonContent: string,
  arg?: number,
  onClick: ()=> void
  red: boolean;
}



export const RedButton = styled("button")<Props>`
  align-items: center;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  padding: 6px 16px;
  flex-shrink: 0;
  border-radius: 3px;
  font-weight: 500;
  background: rgba(235, 87, 87, 0.03);
  color:${(props)=> props.red ? "red" : "white" }
  border: 1px solid rgb(249, 200, 200);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    background-color: #f3edeb;
  }
`;



  const Button = ({ buttonContent, ...buttonProps}: Props) => {
      return <RedButton {...buttonProps as any} className={bc}>{
        buttonContent
      }</RedButton>
  }
  
  Button.displayName = 'Button'

  export default Button
  
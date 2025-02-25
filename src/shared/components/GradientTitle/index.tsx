import styled from "styled-components";
import { getBackgroundColor } from "../../../styles/monsterTheme/monsterTheme";

const StyledTitle = styled.h1<{color: string}>`
  background: ${props => props.color ? getBackgroundColor(props.color) : getBackgroundColor('unknown')};
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 500;
`;

interface GradientTitleProps{
    color:string,
    children:string
}

export default function GradientTitle({ color, children } : GradientTitleProps){
 return (
    <StyledTitle color={color}>
        {children}
    </StyledTitle>
 );   
}
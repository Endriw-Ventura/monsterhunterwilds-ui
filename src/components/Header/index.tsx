import styled from "styled-components";
import { useThemeContext } from "../../hooks/useThemeContext";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(#0b87d4, #00ffe1);
    font-size: 20px;
    height: 100px;
    padding: 20px;
`;

const StyledButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    padding: 10px;
    background-color: purple;
    box-shadow: 10px 10px 10px rgba(3, 202, 209, 0.5);
`;
export default function Header() {

    const { isDarkTheme, toggleTheme } = useThemeContext();

    return(
        <StyledHeader>  
            <h1>
                Desenvolvido por Endriw Ventura
            </h1>
            <StyledButton onClick={() => toggleTheme(isDarkTheme)}>
               {isDarkTheme ? 'Modo Escuro' : 'Modo Claro'}
            </StyledButton>
        </StyledHeader>
    );
}
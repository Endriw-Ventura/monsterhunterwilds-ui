import styled from "styled-components";
import { useThemeContext } from "../../../hooks/useThemeContext";
import background from "../../../assets/images/header-background.png";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    max-height: 100px;
    flex: 1;
    padding: 20px;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const StyledButtonContainer = styled.div`
    background:${({ theme }) => `linear-gradient(90deg, ${theme.primary}, ${theme.button})`};
    padding: 2px;
    border-radius: 20px;
    height: 40px;
    width: 94px;
    box-shadow: ${({ theme }) => `0px 4px 5px ${theme.button}`};
`;

const StyledButton = styled.button`
    width: 90px;
    height: 35px;
    border-radius: 20px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
`;

export default function Header() {

    const { isDarkTheme, toggleTheme } = useThemeContext();

    return(
        <StyledHeader>  
            <StyledButtonContainer>
                <StyledButton onClick={() => toggleTheme(isDarkTheme)}>
                    {isDarkTheme ? 'Lightmode' : 'Darkmode'}
                </StyledButton>
            </StyledButtonContainer>
        </StyledHeader>
    );
}
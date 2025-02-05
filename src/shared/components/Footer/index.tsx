import styled from "styled-components";
import logo from "../../../assets/images/game-logo.png";
import background from "../../../assets/images/game-icon.png";

const StyledFooter = styled.footer`
        padding: 10px;
        font-size: 20px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        max-height: 150px;
        background-image: url(${background});
        background-position-y: 57%;
        background-repeat: no-repeat;
        background-size: cover;
`;

const StyledText = styled.h1`
    font-size: 20px;
    text-align: center;
    font-weight: 700;
`;

const StyledLogo = styled.img`
    height: 60px;
    width: 60px;
    object-fit: contain;
    object-position: center;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledLogo src={logo}/>
            <StyledText>Desenvolvido por Endriw Ventura</StyledText>
        </StyledFooter>
    );
}
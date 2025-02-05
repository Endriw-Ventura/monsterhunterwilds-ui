import styled from "styled-components";
import logo from "../../../assets/images/game-logo.png";
import background from "../../../assets/images/game-icon.png";

const StyledFooter = styled.footer`
    padding: 10px;
    font-size: 20px;
    max-height: 100px;
    height: 100px;
    background-image: url(${background});
    background-position-y: 56%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex
;
    align-items: center;
`;

const StyledText = styled.h1`
    font-size: 20px;
    text-align: center;
    font-weight: 700;
`;

const StyledLogo = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 10px;
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
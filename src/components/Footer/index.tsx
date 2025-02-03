import styled from "styled-components";


const StyledFooter = styled.footer`
    footer {
        padding: 10px;
        background: linear-gradient(black, purple);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <h1>Desenvolvido por Endriw Ventura</h1>
        </StyledFooter>
    );
}
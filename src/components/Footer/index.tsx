import styled from "styled-components";


const StyledFooter = styled.footer`
        padding: 10px;
        font-size: 20px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        max-height: 50px;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <h1>Desenvolvido por Endriw Ventura</h1>
        </StyledFooter>
    );
}
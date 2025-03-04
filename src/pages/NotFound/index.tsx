import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const StyledText = styled.h1`
    font-size: 38px;
    font-weight: 400;
    text-align: center;
`

export default function NotFound() {
    return (
        <StyledSection>
            <StyledText>Oush, seems to me that you are lost.</StyledText>
            <Link to="/">Go back to the home page and start again.</Link>
        </StyledSection>
    )
}

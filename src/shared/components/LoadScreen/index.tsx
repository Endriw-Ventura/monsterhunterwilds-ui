import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    margin: auto;
`

const StyledSection = styled.section`
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function LoadScreen() {
    return (
        <StyledSection>
            <Loader />
        </StyledSection>
    )
}

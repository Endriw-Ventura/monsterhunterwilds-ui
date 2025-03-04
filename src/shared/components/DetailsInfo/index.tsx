import { ReactNode } from 'react'
import styled from 'styled-components'

interface DetailsInfoProps {
    title: string
    children: ReactNode
}

const StyledSubtitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
`
export default function DetailsInfo({ title, children }: DetailsInfoProps) {
    return (
        <div>
            <StyledSubtitle>{title}</StyledSubtitle>
            {children}
        </div>
    )
}

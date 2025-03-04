import styled from 'styled-components'
import { useMonsterList } from '../../hooks/useMonsterList'
import GradientTitle from '../../shared/components/GradientTitle'
import Home from '../Home'
import DetailsInfo from '../../shared/components/DetailsInfo'

const StyledSection = styled.section`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    padding: 10px 80px;
`

const StyledImage = styled.img`
    height: 700px;
    padding: 10px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1 / 1;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 10px rgba(1, 230, 246, 0.5);
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 50%;
    height: 700px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 10px rgba(1, 230, 246, 0.5);
`

const StyledText = styled.h2`
    font-size: 20px;
    font-weight: 400;
`

export default function MonsterDetails() {
    const { selectedMonster } = useMonsterList()

    if (!selectedMonster) return <Home />

    return (
        <StyledSection>
            <StyledColumn>
                <DetailsInfo title={'Name'}>
                    <GradientTitle color={selectedMonster.elements[0]}>
                        {selectedMonster.name}
                    </GradientTitle>
                </DetailsInfo>

                <DetailsInfo title={'Elements'}>
                    {selectedMonster.elements.map((element) => (
                        <GradientTitle color={element} key={element}>
                            {element}
                        </GradientTitle>
                    ))}
                </DetailsInfo>

                <DetailsInfo title={'Weaknesses'}>
                    {selectedMonster.weaknesses.map((weakness) => (
                        <GradientTitle color={weakness} key={weakness}>
                            {weakness}
                        </GradientTitle>
                    ))}
                </DetailsInfo>

                <DetailsInfo title={'Ailments'}>
                    {selectedMonster.ailments.map((ailment) => (
                        <GradientTitle color={ailment} key={ailment}>
                            {ailment}
                        </GradientTitle>
                    ))}
                </DetailsInfo>

                <DetailsInfo title={'Habitats'}>
                    {selectedMonster.habitats.map((habitat) => (
                        <StyledText color={habitat} key={habitat}>
                            {habitat}
                        </StyledText>
                    ))}
                </DetailsInfo>

                <DetailsInfo title={'Size'}>
                    <StyledText>{selectedMonster.size}</StyledText>
                </DetailsInfo>

                <DetailsInfo title={'Description'}>
                    <StyledText>{selectedMonster.description}</StyledText>
                </DetailsInfo>
            </StyledColumn>
            <StyledImage src={selectedMonster.img} />
        </StyledSection>
    )
}

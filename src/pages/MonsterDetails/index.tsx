import styled from "styled-components";
import { useMonsterList } from "../../hooks/useMonsterList";
import { getBackgroundColor } from "../../styles/monsterTheme/monsterTheme";

interface StyleType {
    $type: string
}

const StyledSection = styled.section`
    padding: 40px 60px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const StyledImage = styled.img`
    height: 450px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1 / 1;
`;

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
`;

const StyledTitle = styled.h1`
    font-size: 38px;
    font-weight: 700;
`;

const StyledSubtitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
`;

const GradientTitle = styled.h1<StyleType>`
  background: ${(props) => props.$type ? getBackgroundColor(props.$type) : getBackgroundColor('unknown')};
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: 500;
`;

export default function MonsterDetails(){
    const { selectedMonster } = useMonsterList();
    return(
        <StyledSection>
            <StyledImage src={selectedMonster?.img} />
            <StyledTitle>{selectedMonster?.name}</StyledTitle>
            <StyledRow>
                <StyledColumn>
                <StyledSubtitle>Elements</StyledSubtitle>
                    {
                        selectedMonster?.elements.map(
                            element => 
                            <GradientTitle 
                                $type={element}
                                key={element}>
                                    {element}
                            </GradientTitle>)
                    }
                </StyledColumn>
                <StyledColumn>
                    <StyledSubtitle>Weaknesses</StyledSubtitle>
                    {
                        selectedMonster?.weaknesses.map(
                            weakness => 
                            <GradientTitle 
                                $type={weakness} 
                                key={weakness}>
                                    {weakness}
                            </GradientTitle>)
                    }
                </StyledColumn>
                <StyledColumn>
                    <StyledSubtitle>Ailments</StyledSubtitle>
                    {
                        selectedMonster?.ailments.map(
                            ailment => 
                            <GradientTitle 
                                $type={ailment} 
                                key={ailment}>
                                    {ailment}
                            </GradientTitle>)
                    }
                </StyledColumn>
            </StyledRow>
        </StyledSection>
    );
}
import styled from "styled-components";
import { useMonsterList } from "../../hooks/useMonsterList";
import { getBackgroundColor } from "../../styles/monsterTheme/monsterTheme";
import NotFound from "../NotFound";

interface StyleType {
    $type: string
}

const StyledSection = styled.section`
    padding: 40px 60px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    flex: 2;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

const StyledImage = styled.img`
    height: 350px;
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
        selectedMonster ?
        <StyledSection>
            <GradientTitle $type={selectedMonster?.elements[0]}>
                {selectedMonster?.name}
            </GradientTitle>
            <StyledImage src={selectedMonster?.img} />
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
        : <NotFound />
    );
}
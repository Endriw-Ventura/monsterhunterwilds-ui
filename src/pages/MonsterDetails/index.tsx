import styled from "styled-components";
import { useMonsterList } from "../../hooks/useMonsterList";
import { getBackgroundColor } from "../../styles/monsterTheme/monsterTheme";
import NotFound from "../NotFound";

interface StyleType {
    $type: string
}

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
`;

const StyledImage = styled.img`
    height: 700px;
    padding: 10px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1 / 1;
`;

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
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
                <StyledColumn>
                    <GradientTitle $type={selectedMonster?.elements[0]}>
                        {selectedMonster?.name}
                    </GradientTitle> 
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
                <StyledImage src={selectedMonster?.img} />
        </StyledSection>
        : <NotFound />
    );
}
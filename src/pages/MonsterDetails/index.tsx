import styled from "styled-components";
import { useMonsterList } from "../../hooks/useMonsterList";
import NotFound from "../NotFound";
import GradientTitle from "../../shared/components/GradientTitle";

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
    border-radius: 15px;
    box-shadow: 0px 0px 15px 10px rgba(1, 230, 246, 0.5);
`;

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 50%;
    height: 700px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 10px rgba(1, 230, 246, 0.5);
`;

const StyledSubtitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
`;

const StyledText = styled.h2`
    font-size: 20px;
    font-weight: 400;
`;



export default function MonsterDetails(){
    const { selectedMonster } = useMonsterList();

    if(!selectedMonster)
        return <NotFound />

    return(
        <StyledSection>
                <StyledColumn>
                    <GradientTitle 
                        color={selectedMonster.elements[0]}
                    >
                        {selectedMonster.name}
                    </GradientTitle> 

                    <StyledSubtitle>
                        Elements
                    </StyledSubtitle>
                    
                    {
                        selectedMonster.elements.map(
                            element => 
                                <GradientTitle 
                                    color={element}
                                    key={element}
                                >
                                    {element}
                                </GradientTitle>
                        )
                    }

                    <StyledSubtitle>
                        Weaknesses
                    </StyledSubtitle>

                    {
                        selectedMonster.weaknesses.map(
                            weakness => 
                                <GradientTitle 
                                    color={weakness} 
                                    key={weakness}>
                                        {weakness}
                                </GradientTitle>
                        )
                    }

                    <StyledSubtitle>
                        Ailments
                    </StyledSubtitle>

                    {
                        selectedMonster.ailments.map(
                            ailment => 
                                <GradientTitle 
                                    color={ailment} 
                                    key={ailment}>
                                        {ailment}
                                </GradientTitle>
                        )
                    }
                    
                </StyledColumn>
                <StyledImage src={selectedMonster.img} />
        </StyledSection>
    );
}
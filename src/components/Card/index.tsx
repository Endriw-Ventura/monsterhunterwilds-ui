import { Monster } from "../../config/types/monsterTypes";
import NoIcon from "../../assets/images/unknown-icon.png";
import styled from "styled-components";

interface CardProps{
  key: number;
  item: Monster;
}

const StyledCard = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
`;

const StyledImage = styled.img`
    height: 100px;
    object-fit: contain;
    object-position: center;
`;

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 30px;
`;

const StyledUpperContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLowerContainer = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
`;

export default function Card({ item }: CardProps){
    return(
    <StyledCard onClick={() => {
        console.log("click")
      }}>
        <StyledUpperContainer>
          <StyledImage src={item.icon === "unknown" ? NoIcon : item.icon}/>
        </StyledUpperContainer>
        <StyledLowerContainer>
          <StyledTitle>{item.name}</StyledTitle> 
        </StyledLowerContainer>
    </StyledCard>
  );
}
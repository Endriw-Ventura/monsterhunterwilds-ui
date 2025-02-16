import { Monster } from "../../../types/monsterTypes";
import NoIcon from "../../../assets/images/unknown-icon.png";
import styled from "styled-components";
import { getBackgroundColor } from "../../../styles/monsterTheme/monsterTheme";
import { useNavigate } from "react-router-dom";

interface CardProps{
  item: Monster;
  onClick: (id: string) => void;
}

const StyledCard = styled.div<{ $item: Monster }>`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.$item.elements[0] ? getBackgroundColor(props.$item.elements[0]) : getBackgroundColor('unknown')};
  box-shadow: ${({ theme }) => `15px -7px 15px rgba(${theme.shadow})`};

  &:hover{
     box-shadow: -7px 0px 15px 10px rgba(209, 23, 247, 0.7),
     7px 0px 15px 10px rgba(209, 23, 247, 0.7);
  }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);

  :hover{
      cursor: pointer;
    }
`;

const StyledLowerContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Card({ item, onClick }: CardProps){
    const navigate = useNavigate();

    return(
    <StyledCard $item={item}>
        <StyledUpperContainer>
          <StyledImage onClick={() => {
            onClick(item.id.toString());
            navigate(`/MonsterDetails/${item.id}`);
          }} 
      src={item.icon === "unknown" ? NoIcon : item.icon}/>
        </StyledUpperContainer>
        <StyledLowerContainer>
          <StyledTitle>{item.name}</StyledTitle> 
        </StyledLowerContainer>
    </StyledCard>
  );
}
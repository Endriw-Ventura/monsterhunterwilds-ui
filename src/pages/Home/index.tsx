import { useEffect } from "react";
import { useMonsterList } from "../../hooks/useMonsterList.ts";
import { dataURL } from "../../config/config.ts";
import LoadScreen from "../../shared/components/LoadScreen";
import ErrorPage from "../ErrorPage";
import Card from "../../shared/components/Card";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 40px 80px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default function Home() {
  const { monsters, loading, error, loadData, setSelectedMonster } = useMonsterList();

  useEffect(() => {
    loadData(dataURL);
  }, []);

function openDetails(id: string) {
  const monster = monsters.find(item => item.id.toString() === id);
  setSelectedMonster(monster);
}

  if (loading) {
    return <LoadScreen />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <StyledSection>
      {monsters.map((monster) => (
        <Card key={monster.id} item={monster} onClick={openDetails}/>
      ))}
    </StyledSection>
  );
}

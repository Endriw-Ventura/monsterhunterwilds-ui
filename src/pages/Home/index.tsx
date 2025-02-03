import { useEffect } from "react";
import { useMonsterList } from "../../hooks/useMonsterList.ts";
import { dataURL } from "../../config/config.ts";
import LoadScreen from "../../components/LoadScreen/index.tsx";
import ErrorPage from "../ErrorPage/index.tsx";
import Card from "../../components/Card/index.tsx";
import styled from "styled-components";

const StyledSection = styled.section`
  

`;


export default function Home() {
  const { monsters, loading, error, loadData } = useMonsterList();

  useEffect(() => {
    loadData(dataURL);
  }, []);

  if (loading) {
    return <LoadScreen />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <section>
      {monsters.map((monster) => (
        <Card key={monster.id} item={monster} />
      ))}
    </section>
  );
}

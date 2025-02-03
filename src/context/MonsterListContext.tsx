import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import axios from "axios";
import { useState } from "react";
import { Monster } from "../config/types/monsterTypes";

interface ProviderProps {
  children: ReactNode
}

interface MonsterListContextType {
  error: string | null;
  loading: boolean;
  monsters: Monster[];
  selectedMonster: Monster | undefined;
  loadData: (url: string) => void;
  setSelectedMonster: Dispatch<SetStateAction<Monster | undefined>>;
}

export const MonsterListContext = createContext<MonsterListContextType | null>(null);
export const MonsterListProvider = ({ children }: ProviderProps ) => {
  const [error, setError] =  useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [selectedMonster, setSelectedMonster] = useState<Monster | undefined>(undefined);;
  
  const loadData = async (url: string) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setMonsters(response.data.monsters);
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <MonsterListContext.Provider
      value={{
        monsters,
        loading,
        error,
        loadData,
        selectedMonster,
        setSelectedMonster
      }}
    >
      {children}
    </MonsterListContext.Provider>
  );
};

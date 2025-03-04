import { useContext } from 'react'
import { MonsterListContext } from '../context/MonsterListContext'

export function useMonsterList() {
    //const { monsters, loading, error, loadData } = useContext(MonsterListContext)!;
    //return { monsters, loading, error, loadData };

    const context = useContext(MonsterListContext)

    if (!context) {
        throw new Error(
            'useMonsterList must be used within a MonsterListProvider'
        )
    }

    const {
        monsters,
        loading,
        error,
        loadData,
        selectedMonster,
        setSelectedMonster,
    } = context
    return {
        monsters,
        loading,
        error,
        loadData,
        selectedMonster,
        setSelectedMonster,
    }
}

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function useThemeContext() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error(
            'useMonsterList must be used within a MonsterListProvider'
        )
    }

    const { isDarkTheme, toggleTheme } = context
    return { isDarkTheme, toggleTheme }
}

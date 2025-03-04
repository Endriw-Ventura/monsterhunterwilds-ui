import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/themes/themes'

interface ThemeContextType {
    isDarkTheme: boolean
    toggleTheme: (prev: boolean) => void
}

interface ThemeProviderWrapperProps {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
export const ThemeProviderWrapper = ({
    children,
}: ThemeProviderWrapperProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev)
    }
    const theme = isDarkTheme ? darkTheme : lightTheme
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyles'
import { useTheme } from './hooks'
import themes from './theme'

export const Theme: FC = ({ children }) => {

    // Hook que maneja el tema de la aplicación
    const { keyTheme } = useTheme()

    return (
        <>
            <ThemeProvider theme={themes[keyTheme]}>
                {children}
                <GlobalStyle/>
            </ThemeProvider>
        </>
    )
}

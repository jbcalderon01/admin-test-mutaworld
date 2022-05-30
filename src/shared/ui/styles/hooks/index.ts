import { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { Theme } from '../declarations'
import { lightTheme } from '../theme'


type TUseTheme = {
    theme: Theme,
    handleTheme: (mode: string) => void,
    mountedComponent: boolean,
    keyTheme: 'light' | 'dark'
}
/**
 * Hook that changes theme
 * @returns {[{theme: object, handleTheme: void, mountedComponent: boolean, keys: object}]} argumentos
 */
export const useTheme = (): TUseTheme => {
    const [theme, setTheme] = useState(lightTheme)
    const [keyTheme, setKeyTheme] = useState('light')
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = useCallback((themeMode: any, mode: string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(themeMode)
    }, [])

    const handleTheme = useCallback((mode: string) => {
        // Mode === 'light' ? setMode(lightTheme, 'light') : setMode(darkTheme, mode)
        setMode(lightTheme, 'light')
        setKeyTheme(mode)
    }, [])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme ? handleTheme(localTheme) : handleTheme('light')
        setMountedComponent(true)
    }, [handleTheme])

    return {theme, handleTheme, mountedComponent, keyTheme }
}

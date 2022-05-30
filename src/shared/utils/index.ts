import { DefaultTheme } from 'styled-components'

export const getThemeColor = (color?: string | ((theme?: DefaultTheme) => string), theme?: DefaultTheme) => {
    if (!color) return

    if (typeof color === 'function') {
        return color(theme)
    }

    const colors = color?.split('.') || []

    if (colors.length > 1) {
        return colors.reduce((acc: any, x) => acc?.[x], { theme })
    }

    return color
}

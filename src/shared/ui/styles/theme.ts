const general = {
    colors: {
        primary: '#ebb36b',
        secondary: '#2cd9e4',
        variant: '#ffbd29',
        success: '#28c76f',
        warning: '#ff9f43',
        danger: '#ea5455',
        info: '#00cfe8',
    },
}

export const lightTheme = {
    interface: {
        backgrounds: {
            main: '#f1f7f9',
            variant: '#ffffff',
            darken: '#e2e2e2',
        },
    },
    text: {
        main: '#1a1a1a',
        variant: '#2b3445',
        lighten: '#9e9e9e',
        light: '#ffffff',
    },
    ...general,
}

export const darkTheme = {
    interface: {
        backgrounds: {
            variant: '#161d31',
            main: '#283046',
        },
    },
    text: {
        variant: '#5e5873',
        main: '#d8d6de',
        light: '#ffff',
    },
    ...general,
}

const themes = {
    light: lightTheme,
    dark: darkTheme,
}

export default themes

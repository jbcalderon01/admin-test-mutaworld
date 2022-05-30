import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Fredoka-Regular, sans-serif;
        /* overflow: hidden; */
    }

    code {
        font-family: Fredoka-Regular, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }


    @font-face {
        font-family: Fredoka-Bold;
        src: url('/fonts/Fredoka/Fredoka-Bold.woff');
        font-weight: bold;
    }
    @font-face {
        font-family: Fredoka-Medium;
        src: url('/fonts/Fredoka/Fredoka-Medium.woff');
        font-weight: 600;
    }
    @font-face {
        font-family: Fredoka-Regular;
        src: url('/fonts/Fredoka/Fredoka-Regular.woff');
    }
    @font-face {
        font-family: Fredoka-Light;
        src: url('/fonts/Fredoka/Fredoka-Light.woff');
        font-weight: 300;
    }

    // Ant Design Table

    .tableStylePrimary {
        .ant-table-cell {
            font-weight: bold;
            background-color: ${({ theme }) => theme.interface.backgrounds.main};
        }
    }
`

export default GlobalStyle

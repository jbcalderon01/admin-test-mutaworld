import styled from 'styled-components'

export const LayoutMainWrapper = styled.div`
    display: grid;
    grid-template-columns: 276px calc(100% - 276px);
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.interface.backgrounds.main};
`

export const Body = styled.div`
    padding: 0 2rem;
`

import styled from 'styled-components'

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.interface.backgrounds.variant};
    padding: 0 1rem;
`
export const SidebarLogoWrapper = styled.div`
    margin: 0 0 2rem 0;
    padding: 2rem;
`
export const SidebarItemList = styled.div`
    width: 100%;
`
type TSidebarItem = {
    active?: boolean
}

export const SidebarItem = styled.a<TSidebarItem>`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 3rem;
    font-weight: bold;
    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.text.main};
    transition: .2s;
    border-radius: 6px;
    background-color: ${({ active, theme }) => active && theme.interface.backgrounds.main};
    :hover {
        color: ${({ theme }) => theme.text.main};
        background-color: ${({ theme }) => theme.interface.backgrounds.main};
    }

`

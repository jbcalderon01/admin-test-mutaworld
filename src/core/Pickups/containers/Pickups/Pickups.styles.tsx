import styled from 'styled-components';

export const PickupsWrapper = styled.div`
    padding-top: 3rem;
`
export const PickupsDayFilterWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.interface.backgrounds.darken};
`

type TPickupsDayFilter = {
    active?: boolean
}

export const PickupsDayFilter = styled.div<TPickupsDayFilter>`
    font-size: 28px;
    font-weight: bold;
    color: ${({ active, theme }) => !active && theme.text.lighten };
`
export const PickupsOptionsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
`
export const PickupOption = styled.div`
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-right: 2px solid ${({ theme }) => theme.interface.backgrounds.darken};
    > span {
        margin-right: 1rem;
        font-weight: bold;
    }
`
export const PickupSearchField = styled.input`
    
`

export const PickupActionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${({ theme }) => theme.interface.backgrounds.darken};
`
export const NotFoundMessage = styled.p`
    color: ${({ theme }) => theme.text.lighten};
    font-size: 28px;
    text-align: center;
    margin: 3rem 0;
    font-weight: bold;

`

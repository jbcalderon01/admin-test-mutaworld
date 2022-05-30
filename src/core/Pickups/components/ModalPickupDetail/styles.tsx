import styled from 'styled-components';

export const ModalTitle = styled.h1`
    font-weight: bold;
`

export const Label = styled.div`
    color: ${({ theme }) => theme.text.lighten};
    margin-top: 1rem;
`

export const AttributesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px;
    align-items: center;
    justify-content: flex-end;
`

export const AttributeLabel = styled.div`
    font-weight: bold;
    padding: .5rem 0;
    color: ${({ theme }) => theme.text.main};
`
export const AttributeValue = styled.div`
    color: ${({ theme }) => theme.text.lighten};
`
export const TotalValue = styled.div`
    font-size: 24px;
`

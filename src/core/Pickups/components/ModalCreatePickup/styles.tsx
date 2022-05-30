import styled from 'styled-components';

export const ModalTitle = styled.h1`
    font-weight: bold;
`
export const ModalForm = styled.form``

export const Label = styled.div`
    color: ${({ theme }) => theme.text.lighten};
    margin-top: 1rem;
`

export const AttributesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 80px;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`

export const AttributeLabel = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.text.main};
`
export const AttributeField = styled.input`
    outline: none;
    text-align: end;
    -webkit-appearance: none; 
    margin: 0; 
    border: 1px solid #d0d0d0;
    padding: 2px;
`
export const TotalWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`

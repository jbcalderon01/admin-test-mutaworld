import styled from 'styled-components'

export const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputFieldLabel = styled.div`
    margin-bottom: 10px;
    > span {
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Input = styled.input`
    border: 1px solid #afb8c7;
    outline: none;
    background-color: #f9fafb;
    padding: 1rem 15px;
    border-radius: 100px;
    font-family: Fredoka-Regular;
    font-size: 16px;
    /* width: 100%; */
`

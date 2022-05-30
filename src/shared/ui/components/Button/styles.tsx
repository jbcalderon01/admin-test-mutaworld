import styled from 'styled-components'

import { TButtonWrapper } from './types'

export const ButtonWrapper = styled.button<TButtonWrapper>`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
    border-radius: 6px;
    letter-spacing: 1px;
    width: max-content;
    font-weight: bold;
    font-family: Fredoka-Regular;
    padding: 4px 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.text.light};
`

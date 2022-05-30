import React, { FC } from 'react'

import { ButtonWrapper } from './styles'
import { IButton } from './types'

export const Button: FC<IButton> = ({
    children,
    style,
    color = 'primary',
    size = 'default',
    variant = 'filled',
    onClick
}) => {
    return (
        <ButtonWrapper color={color} size={size} style={style} variant={variant} onClick={onClick}>
            {children}
        </ButtonWrapper>
    )
}

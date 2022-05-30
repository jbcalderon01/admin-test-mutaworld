import { CSSProperties } from 'react'

type TVariantButton = 'filled' | 'border' | 'flat' | 'round'

type TSizeButton = 'large' | 'default' | 'small'

export interface IButton {
    variant?: TVariantButton
    size?: TSizeButton
    color?: string
    style?: CSSProperties
    onClick?: () => void
}

// Styled

export type TButtonWrapper = {
    variant: TVariantButton
    size: TSizeButton
    color: string
}

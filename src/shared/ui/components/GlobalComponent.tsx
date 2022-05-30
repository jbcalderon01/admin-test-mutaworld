/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { CSSProperties, FC } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { getThemeColor } from '@shared/utils'

const TYPOGRAPHY_SIZES = {
    xs: '1rem',
    sm: '1.07rem',
    lg: '1.286rem',
    '1x': '1.5rem',
    '2x': '1.714rem',
    '3x': '2rem',
}

type TStyledA = {
    hover?: boolean
    active?: boolean
}

export const StyledA = styled.a<TStyledA>`
    text-decoration: none;
    cursor: pointer;
    transition: 0.1s;
    color: ${({ theme, active }) => (active ? theme.colors.primary : 'inherit')};
    :hover {
        color: ${({ theme, hover }) => hover && theme.colors.primary};
    }
`

type TStyledLink = {
    href: string
    active?: boolean
    hover?: boolean
    className?: string
}

export const StyledLink: FC<TStyledLink> = ({ className, children, href, hover, active }) => {
    return (
        <Link passHref href={href}>
            <StyledA active={active} className={className} hover={hover}>
                {children}
            </StyledA>
        </Link>
    )
}

type TTypography = {
    size?: keyof typeof TYPOGRAPHY_SIZES
    color?: string | ((theme: DefaultTheme) => string)
    fontWeight?: string
    margin?: string
    letterSpacing?: string
}
export const Typography = styled.p<TTypography>`
    margin: ${({ margin }) => margin || '0'};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    font-size: ${({ size = 'sm' }) => TYPOGRAPHY_SIZES[size]};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ color = 'main', theme }) => getThemeColor(color, theme)};
`

export const FontAwesomeIcon = styled(FAIcon)`
    color: ${({ color = 'inherit', theme }) => color && getThemeColor(color, theme)};
`

type TBox = {
    justifyContent?: CSSProperties['justifyContent']
    flexDirection?: CSSProperties['flexDirection']
    alignItems?: CSSProperties['alignItems']
    bgColor?: string
    padding?: string
    margin?: string
    gap?: string
    width?: string
    height?: string
    position?: CSSProperties['position']
}
export const Box = styled.div<TBox>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    align-items: ${({ alignItems }) => alignItems};
    margin: ${({ margin }) => margin};
    padding: ${({ padding }) => padding};
    position: ${({ position }) => position};
    width: ${({ width }) => width};
    gap: ${({ gap }) => gap};
    height: ${({ height }) => height};
    background-color: ${({ bgColor, theme }) => getThemeColor(bgColor, theme)};
`
export const ContentWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    padding: 0.8rem;
`
type TTitle = {
    margin?: string
    color?: string
    fSize?: string
}

export const Title = styled.h1<TTitle>`
    font-size: ${({ fSize }) => fSize || '36px'};
    letter-spacing: 1px;
    line-height: normal;
    color: ${({ color = 'main', theme }) => getThemeColor(color, theme)};
    font-family: Fredoka-Bold;
    margin: ${({ margin }) => margin};
`

export const Tag = styled.span`
    padding: 4px;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary}
`

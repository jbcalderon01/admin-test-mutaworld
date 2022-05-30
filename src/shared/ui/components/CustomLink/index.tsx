import Link from 'next/link'
import { FC } from 'react'

import { StyledA } from './styles'
import { TCustomLink } from './types'

export const CustomLink: FC<TCustomLink> = ({ className, children, href }) => {
    return (
        <Link passHref href={href}>
            <StyledA className={className}>{children}</StyledA>
        </Link>
    )
}

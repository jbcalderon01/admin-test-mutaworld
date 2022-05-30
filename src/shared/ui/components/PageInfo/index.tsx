import React, { FC } from 'react'

import { PageInfoTitle, PageInfoWrapper } from './styles'
import { TPageInfo } from './types.d'

export const PageInfo: FC<TPageInfo> = ({ title }) => {
    return (
        <PageInfoWrapper>
            <PageInfoTitle>{title}</PageInfoTitle>
        </PageInfoWrapper>
    )
}

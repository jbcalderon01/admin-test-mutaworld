import React, { FC } from 'react'

import { Sidebar } from './components'
import { Body, LayoutMainWrapper } from './LayoutMain.styles'

export const LayoutMainComponent: FC = ({ children }) => {

    return (
        <LayoutMainWrapper>
            <Sidebar/>
            <Body>
                {children}
            </Body>
        </LayoutMainWrapper>
    )
}

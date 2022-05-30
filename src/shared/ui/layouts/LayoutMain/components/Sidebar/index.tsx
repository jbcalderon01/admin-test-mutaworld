import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { SidebarItem, SidebarItemList, SidebarLogoWrapper, SidebarWrapper } from './styles'
import { TSidebar } from './types'

export const Sidebar: FC<TSidebar> = () => {

    // Hooks
    const router = useRouter()

    return (
        <SidebarWrapper>
            <SidebarLogoWrapper>
                <h2>Admin Test</h2>
            </SidebarLogoWrapper>
            <SidebarItemList>
                <Link passHref href="/pickups">
                    <SidebarItem active={router.pathname === '/pickups'} >
                        <FontAwesomeIcon icon={faTrashAlt} /> &nbsp;
                        Recolecciones
                    </SidebarItem>
                </Link>
            </SidebarItemList>
        </SidebarWrapper>
    )
}

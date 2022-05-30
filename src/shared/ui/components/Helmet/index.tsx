import Head from 'next/head'
import React, { FC } from 'react'

import { THelmet } from './types'

export const Helmet: FC<THelmet> = ({ title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Admin'}</title>
            </Head>
        </>
    )
}

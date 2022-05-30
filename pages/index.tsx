import type { NextPage } from 'next'

import { Helmet } from '@shared/ui/components'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
    // Hooks
    const router = useRouter()

    useEffect(() => {
        router.push('/pickups')
    }, [])

    return (
        <>
            <Helmet title="Admin" />
        </>
    )
}

export default HomePage

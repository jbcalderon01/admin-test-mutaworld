import type { AppProps } from 'next/app'

import { StorageProvider } from '@shared/storage/storage.provider'
import { Theme } from '@shared/ui/styles/theme.context'
import { LayoutMain } from '@shared/ui/layouts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// Slider CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Ant Design
import 'antd/dist/antd.css'
import { FC } from 'react'
//Library Fontawesome
library.add(fas, fab)

// Layouts
const Layouts = {
    main: LayoutMain,
}

const SafeHydrate: FC = ({ children }) => {
    return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>
}

function MyApp({ Component, pageProps }: AppProps) {
    const CurrentLayout = Layouts['main']

    return (
        <SafeHydrate>
            <Theme>
                <StorageProvider>
                    <CurrentLayout>
                        <Component {...pageProps} />
                    </CurrentLayout>
                </StorageProvider>
            </Theme>
        </SafeHydrate>
    )
}

export default MyApp

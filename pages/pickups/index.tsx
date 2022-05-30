import { PickupsContainer } from '@core/Pickups/containers'
import { Helmet } from '@shared/ui/components'
import { NextPage } from 'next'

const PickupPage: NextPage = () => {
    return (
        <div>
            <Helmet title="Recolecciones | Admin" />
            <PickupsContainer/>
        </div>
    )
}

export default PickupPage

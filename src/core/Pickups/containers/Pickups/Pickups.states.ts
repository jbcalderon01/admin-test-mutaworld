/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export const usePickups = () => {
    // States
    const [isOpenModalCreatePickup, setIsOpenModalCreatePickup] = useState(false)
    const [isOpenModalPickupDetail, setIsOpenModalPickupDetail] = useState(false)
    const [dataPickups, setDataPickups] = useState<any[]>([])
    const [pickupSelected, setPickupSelected] = useState<any>()

    const handleOpenModalPickup = (value: boolean) => {
        setIsOpenModalCreatePickup(value)
    }

    const handleOpenModalPickupDetail = (value: boolean) => {
        setIsOpenModalPickupDetail(value)
    }

    const addPickup = (pickup: any) => {
        setDataPickups([...dataPickups, { id: dataPickups.length + 1, ...pickup }])
    }

    const handleSubmit = (dataForm: any) => {
        addPickup(dataForm)
    }

    const handleClickRow = (dataPickup: any) => {
        setPickupSelected(dataPickup)
        setIsOpenModalPickupDetail(true)
    }

    return {
        isOpenModalCreatePickup,
        isOpenModalPickupDetail,
        dataPickups,
        pickupSelected,
        handleSubmit,
        handleOpenModalPickup,
        handleClickRow,
        handleOpenModalPickupDetail,
    }
}

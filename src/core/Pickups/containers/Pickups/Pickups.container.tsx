import { Button, PageInfo } from '@shared/ui/components'
import { Box, FontAwesomeIcon, Tag } from '@shared/ui/components/GlobalComponent'
import { Table } from 'antd'
import React, { FC } from 'react'
import { ColumnsType } from 'antd/lib/table'
import { ModalCreatePickup } from '@core/Pickups/components'
import moment from 'moment'
import numeral from 'numeral'
import { ModalPickupDetail } from '@core/Pickups/components/ModalPickupDetail'

import { IPickupsContainer } from './Pickups.types'
import {
    NotFoundMessage,
    PickupActionWrapper,
    PickupOption,
    PickupsDayFilter,
    PickupsDayFilterWrapper,
    PickupSearchField,
    PickupsOptionsWrapper,
    PickupsWrapper
} from './Pickups.styles'
import { usePickups } from './Pickups.states'

const PICKUPS_TABLE_COLUMNS: ColumnsType<any> = [
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'Fecha',
        render: () => moment().format('DD/MM/YYYY')
    },
    {
        title: 'Cliente',
        dataIndex: 'client'
    },
    {
        title: 'Estado',
        render: () => <Tag>Creada</Tag>
    },
    {
        title: 'Materiales',
        dataIndex: 'materials',
        render: materials => (
            <Box flexDirection="row" gap="10px">
                {materials.map((material:any) => (
                    <Tag key={material.id}>{material.name}</Tag>
                ))}
            </Box>)
    },
    {
        title: 'Pago Total',
        dataIndex: 'total',
        render: (value: any) => numeral(value).format('$ 0,0')
    },
]

export const PickupsContainer: FC<IPickupsContainer> = () => {
    const {
        dataPickups,
        pickupSelected,
        isOpenModalCreatePickup,
        isOpenModalPickupDetail,
        handleOpenModalPickup,
        handleOpenModalPickupDetail,
        handleClickRow,
        handleSubmit
    } = usePickups()

    return (
        <PickupsWrapper>
            <PageInfo title="Recolecciones"/>
            <PickupsDayFilterWrapper>
                <PickupsDayFilter active>Hoy</PickupsDayFilter>
                <PickupsDayFilter>Todas</PickupsDayFilter>
            </PickupsDayFilterWrapper>
            <PickupActionWrapper>
                <PickupsOptionsWrapper>
                    <PickupOption>
                        <span>Buscar:</span>
                        <PickupSearchField disabled placeholder="Ingresa un ID"/>
                    </PickupOption>
                    <PickupOption>
                        <span>
                        Filtrar
                        </span>
                        <FontAwesomeIcon icon="filter" size="lg" />
                    </PickupOption>
                    <PickupOption>
                        <span>
                        Organizar
                        </span>
                        <FontAwesomeIcon icon="border-all" size="lg" />
                    </PickupOption>
                </PickupsOptionsWrapper>
                <Button onClick={() => handleOpenModalPickup(true)} >
                    NUEVA ENTRADA &nbsp;
                    <FontAwesomeIcon icon="circle-plus" />
                </Button>
            </PickupActionWrapper>
            {!dataPickups?.length && <NotFoundMessage>
                Parece que aun no haz recogido algo.
                <br/>
                Puedes registrar una recolección haciendo click en el botón de arriba
            </NotFoundMessage>}
            {!!dataPickups.length && <Table
                className="tableStylePrimary"
                columns={PICKUPS_TABLE_COLUMNS}
                dataSource={dataPickups}
                style={{ marginTop: 10 }}
                onRow={(record: any) => {
                    return { onClick: () => handleClickRow(record) }
                }}
            />}
            <ModalCreatePickup
                visible={isOpenModalCreatePickup}
                onCancel={() => handleOpenModalPickup(false)}
                onSubmit={handleSubmit}

            />
            <ModalPickupDetail
                dataPickup={pickupSelected}
                visible={isOpenModalPickupDetail}
                onCancel={() => handleOpenModalPickupDetail(false)}
            />
        </PickupsWrapper>
    )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'antd'
import moment from 'moment'
import numeral from 'numeral'
import React, { FC, Fragment } from 'react'

import { AttributeValue, AttributeLabel, AttributesList, Label, ModalTitle, TotalValue } from './styles'
import { TModalPickupDetail } from './types'

export const ModalPickupDetail: FC<TModalPickupDetail> = ({ visible, onCancel, dataPickup }) => {

    return (
        <Modal
            centered
            destroyOnClose
            footer={false}
            visible={visible}
            onCancel={onCancel}
        >
            <Label>{moment().format('DD/MM/YYYY')}</Label>
            <ModalTitle>{dataPickup?.id}</ModalTitle>
            <Label>Cliente</Label>
            <ModalTitle>{dataPickup?.client}</ModalTitle>
            <Label>Material Recolectado</Label>
            <AttributesList>
                {dataPickup?.materials?.map((material: any) => (
                    <Fragment key={material.id} >
                        <AttributeLabel>
                            {material?.name}
                        </AttributeLabel>
                        <AttributeValue >{numeral(material?.value).format('$ 0,0')}</AttributeValue>
                    </Fragment>
                ))}
            </AttributesList>
            <Label>Pago</Label>
            <TotalValue>{numeral(dataPickup?.total).format('$ 0,0')}</TotalValue>
        </Modal>
    )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, SelectField } from '@shared/ui/components'
import { Modal } from 'antd'
import numeral from 'numeral'
import React, { FC, Fragment } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import { AttributeField, AttributeLabel, AttributesList, Label, ModalForm, ModalTitle, TotalWrapper } from './styles'
import { TModalCreatePickup } from './types'

const DATA_CLIENTS = [
    { name: 'Simon Parilla Sur' },
    { name: 'Bicosa', },
    { name: 'Disney', },
]

const DATA_MATERIAlS = [
    { value: 0, name: 'Aceite Cocina Usado' },
    { value: 0, name: 'Trampa de grasa' },
    { value: 0, name: 'Pimpina Pasta' },
    { value: 0, name: 'Pimpina PET' }
]

const INITIAL_VALUES = {
    client: '',
    materials: DATA_MATERIAlS
}

export const ModalCreatePickup: FC<TModalCreatePickup> = ({ visible, onCancel, onSubmit }) => {

    const { control, register, watch, reset, handleSubmit: submitForm } = useForm({ defaultValues: INITIAL_VALUES })
    const { fields } = useFieldArray({
        control,
        keyName: 'id',
        name: 'materials'
    })

    const values = watch()

    const calculateTotal = (dataForm: any) => {

        const { materials } = dataForm

        return materials.reduce((acc: any, x:any) => (Number(x.value)) + acc, 0)
    }

    const handleSubmit = (dataForm: any) => {
        onSubmit({
            total: calculateTotal(dataForm),
            ...dataForm
        })
        onCancel()
        reset(INITIAL_VALUES)
    }

    return (
        <Modal
            centered
            destroyOnClose
            footer={false}
            visible={visible}
            onCancel={onCancel}
        >
            <ModalTitle>Nueva Entrada</ModalTitle>
            <ModalForm onSubmit={submitForm(handleSubmit)} >
                <Controller
                    control={control}
                    name="client"
                    render={({ field: { onChange } }) => (
                        <SelectField
                            label="Clientes"
                            optionKey="name"
                            options={DATA_CLIENTS}
                            valueKey="name"
                            onChange={onChange}
                        />
                    )}
                />
                <Label>Recolección</Label>
                <AttributesList>
                    {fields.map((field, i) => (
                        <Fragment key={field.id} >
                            <AttributeLabel>
                                {field.name}
                            </AttributeLabel>
                            <AttributeField {...register(`materials.${i}.value`)} type="number" />
                        </Fragment>
                    ))}
                </AttributesList>
                <TotalWrapper>
                    <Label>Pago</Label>
                    {numeral(calculateTotal(values)).format('$ 0,0')}
                </TotalWrapper>
                <Button style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} >CREAR</Button>
            </ModalForm>
        </Modal>
    )
}

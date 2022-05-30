import React, { FC } from 'react'

import { OptionAndDesign, SelectAntDesign, SelectFieldLabel, SelectFieldWrapper } from './styles'
import { TSelectField } from './types'

export const SelectField:FC<TSelectField> = ({ value, onChange, optionKey, options, valueKey, label = 'test' }) => {

    return (
        <SelectFieldWrapper>
            <SelectFieldLabel>{label}</SelectFieldLabel>
            <SelectAntDesign
                value={value}
                onChange={onChange}
            >
                {options.map((option, idx) => (
                    <OptionAndDesign
                        key={`select-option-${idx}-${option?.id}-${option?.[valueKey]}`}
                        value={option?.[valueKey]}
                    >
                        {option?.[optionKey]}
                    </OptionAndDesign>
                ))}
            </SelectAntDesign>
        </SelectFieldWrapper>
    )
}

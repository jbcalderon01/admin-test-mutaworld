import React, { FC } from 'react'

import { Input, InputFieldLabel, InputFieldWrapper } from './styled'
import { TInputField } from './types'

export const InputField: FC<TInputField> = ({ label, placeholder, inputStyle }) => {
    return (
        <InputFieldWrapper>
            {label && (
                <InputFieldLabel>
                    {label} <span>*</span>
                </InputFieldLabel>
            )}
            <Input placeholder={placeholder} style={inputStyle} />
        </InputFieldWrapper>
    )
}

import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import styled from 'styled-components';

export const SelectFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const SelectFieldLabel = styled.label`
    color: ${({ theme }) => theme.text.lighten};
`
export const SelectAntDesign = styled(Select)`

`
export const OptionAndDesign = styled(Select.Option)``

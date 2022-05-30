export type TSelectField<T = any> = {
    options: T[]
    optionKey: keyof T
    valueKey: keyof T
    label?: string
    value?: string
    onChange: ((value: any, option:any) => void) | undefined
}

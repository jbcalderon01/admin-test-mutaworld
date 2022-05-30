export const HOST_API_URL = () => process.env.NEXT_PUBLIC_HOST_API_URL

export const STORAGE = () => ({
    getItem: (value: string) => window.localStorage.getItem(value),
    removeItem: (value: string) => window.localStorage.removeItem(value),
    setItem: (key: string, value: string) => window.localStorage.setItem(key, value),
    clear: () => window.localStorage.clear(),
})

export const ACCESS_TOKEN = () => 'feathers-jwt'

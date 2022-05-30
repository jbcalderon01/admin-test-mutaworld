/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict'
import feathers from '@feathersjs/client'
import auth from '@feathersjs/authentication-client'
import rest from '@feathersjs/rest-client'
import { ACCESS_TOKEN, HOST_API_URL, STORAGE, TIMEOUT } from '@shared/constants'
import axios from 'axios'

// Client
const app = feathers()
// Rest Config
const restClient = rest(HOST_API_URL())

app.configure(restClient.axios(axios))

app.configure(
    auth({
        path: '/authentication',
        timeout: TIMEOUT(),
        cookie: ACCESS_TOKEN(),
        storageKey: ACCESS_TOKEN(),
        storage: STORAGE(),
    } as any),
)

export const retryLogin = () => {
    return app.authenticate({
        strategy: 'jwt',
        accessToken: STORAGE().getItem(ACCESS_TOKEN()),
    })
}
export const ClientFeathers = app

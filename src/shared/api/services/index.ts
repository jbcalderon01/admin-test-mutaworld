import { ClientFeathers } from '../client.config'

/**
 *
 * @param {string} service services endpoint
 * @returns {object} methods services feathers
 */
const getService = (service: string) => ClientFeathers.service(service)


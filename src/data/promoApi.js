import { apiClient } from '../common/apiClient.js'

export const promoApi = {
    async getPromos() {
        return await apiClient.fetch('get', 'promos/extra', null)
    }
}
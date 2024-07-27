import { apiClient } from '../common/apiClient.js'

export const productApi = {
    async getProduct() {
        return await apiClient.fetch('get', 'products/random', null)
    }
}
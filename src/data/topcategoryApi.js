import { apiClient } from '../common/apiClient.js'

export const topcategoryApi = {
    async getCategory() {
        return await apiClient.fetch('get', 'categories/top', null)
    }
}
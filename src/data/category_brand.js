import { apiClient } from '../common/apiClient.js'

export const categorybrandApi = {
    async getCategorybrand() {
        return await apiClient.fetch('get', 'brands', null)
    }
}
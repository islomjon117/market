import { apiClient } from '../common/apiClient.js'

export const categoryfillterApi = {
    async getCategoryList() {
        return await apiClient.fetch('get', 'categories', null)
    }
}
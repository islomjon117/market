import { apiClient } from '../common/apiClient.js'

export const categorytagsApi = {
    async getCategorytags() {
        return await apiClient.fetch('get', 'tags', null)
    }
}
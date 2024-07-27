import { apiClient } from "../common/apiClient.js"

export const headerApi = {
    async getHeader() {
        return await apiClient.fetch('get', 'header', null)
    },
}
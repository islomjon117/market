import { apiClient } from "../common/apiClient.js"

export const categoryApi = {
    async getCategory(slug) {
        return await apiClient.fetch('get', `categories/${slug}`, null)
    },
}
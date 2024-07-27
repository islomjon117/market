import { apiClient } from '../common/apiClient.js'

export const productshowApi = {
    async getproductshow(slug) {
        return await apiClient.fetch('get', `products/${slug}`, null)
    }
}
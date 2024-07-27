import { apiClient } from "../common/apiClient";

export const productlistApi = {
    async getProductList(page, catId, fillterBrands, tagsFillter) {
        return await apiClient.fetch('get', `products?page=${page}&categories=${catId}&tags=${tagsFillter}&brands=${fillterBrands}`, null)
    }
}

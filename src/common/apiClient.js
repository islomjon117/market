import { config } from "../config.js";
import axios from "axios";


export const apiClient = {
    async fetch(method, path, body) {
        const axios_parametrs = {
            method: method,
            url: `${config.baseUrl}${path}`,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body !== null && body !== {}) {
            axios_parametrs.data = body;
        }

        try {
            const response = await axios(axios_parametrs);
            if (response.status === 200) {
                return response.data;
            }

        } catch (e) {
            console.log(e);
        }
    }
}
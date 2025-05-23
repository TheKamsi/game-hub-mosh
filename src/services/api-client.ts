import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number,
    next?: string | null,
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40f4d2013d82446a90f9a1bf2d992e34'
    }
})

class APIClient<T>{
    endpoint: string 

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                    .get<FetchResponse<T>>(this.endpoint, config)
                    .then(res => res.data)
    }

}

export default APIClient
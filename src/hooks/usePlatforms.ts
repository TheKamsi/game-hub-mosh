import platforms from "@/data/platforms"
import APIClient from '@/services/api-client'
import { useQuery } from "@tanstack/react-query"
import ms from "ms"

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatforms = () => {
    return useQuery({
        queryKey:['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms
    })
}

export default usePlatforms
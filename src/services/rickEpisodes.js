import { apiRick } from "./utils"

const getEpisodes = async (data, page) => {
    try {
        const response = await apiRick.get(`/${data}?page=${page}`);
        return response
    } catch (error) {
        console.log("error geting episode")
        throw error
    }

}

export {
    getEpisodes
}
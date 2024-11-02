import { backApi } from "./utils";

export const createUser = async (nombre) => {
 try {
    const response = await backApi.post(`/user`,{nombre})
    console.log(response)
    return response.data
 } catch (error) {
    console.log(error);
    throw error
 }   
}
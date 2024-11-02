import { backApi } from "./utils";

const optenerEpisodios = async (id) => {
  try {
    const response = await backApi.get(`/episodios/one/${id}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

const eliminarEpisodio = async (id, iduser) => {
  console.log(" se eliminara")
  try {
    const response = await backApi.delete(`episodios/${id}/${iduser}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}
export const createEpisode = async (data) => {
  try {
     const response = await backApi.post(`/episodios`,data)
     return response.data
  } catch (error) {
     console.log(error);
     throw error
  }   
 }

export {
  optenerEpisodios,
  eliminarEpisodio
}
import { backApi } from "./utils";

const optenerLocaciones = async (id) => {
  try {
    const response = await backApi.get(`/locaciones/one/${id}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

const eliminarLocacion = async (id, iduser) => {
  try {
    const response = await backApi.delete(`/locaciones/${id}/${iduser}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const createLocacion = async (data) => {
  try {
     const response = await backApi.post(`/locaciones`,data)
     console.log(response)
     return response.data
  } catch (error) {
     console.log(error);
     throw error
  }   
 }

export {
  optenerLocaciones,
  eliminarLocacion
}
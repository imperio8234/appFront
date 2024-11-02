import { backApi } from "./utils";

const optenerPersonajes = async (id) => {
  try {
    const response = await backApi.get(`/personaje/one/${id}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

const eliminarPersonaje = async (id, iduser) => {
  try {
    const response = await backApi.delete(`/personaje/${id}/${iduser}`)
    return response.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export const createPersonaje = async (data) => {
  try {
     const response = await backApi.post(`/personaje`,data)
     console.log(response)
     return response.data
  } catch (error) {
     console.log(error);
     throw error
  }   
 }


export {
  optenerPersonajes,
  eliminarPersonaje
}
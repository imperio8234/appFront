import React, { createContext, useContext, useEffect, useState } from "react";
import { createUser } from "../../services/user.service";
import { createEpisode, eliminarEpisodio, optenerEpisodios } from "../../services/favoritoEpisodio";
import { createPersonaje, eliminarPersonaje, optenerPersonajes } from "../../services/favoritoPersonaje";
import { createLocacion, eliminarLocacion, optenerLocaciones } from "../../services/favoritoLocacion";

const UserContext = createContext(null);

const RickProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);
    const [favoritosLocation, setFavoritosLocation] = useState([]);
    const [favoritosEpisode, setFavoritosEpisode] = useState([]);
    const [user, setUser] =useState("");
    const [modalUser, setModalUser] = useState(false);
    const [favoritMode, setFavoritMode] = useState(""); // me permite abrir la info de las card de los favoritos agregados
    const [deleteItem, setDeleteItem] = useState({});
  
    async function init(id) {
      
      try {
          console.log("Iniciando la función init...");
          
          const responseEpisode = await optenerEpisodios(id);
          console.log("Episodios:", responseEpisode);
          
          const responsePersonaje = await optenerPersonajes(id);
          console.log("Personajes:", responsePersonaje);
          
          const responseLocaciones = await optenerLocaciones(id);
          console.log("Locaciones:", responseLocaciones);
          
          setFavoritos(responsePersonaje.data);
          setFavoritosEpisode(responseEpisode.data);
          setFavoritosLocation(responseLocaciones.data);
          
          console.log("Inicialización completa.");
      } catch (error) {
          console.error("Error al inicializar:", error);
      }
  }
  


  async  function deleteItemDB(id, idUser, ventana, favoritMode) {
       
        if (ventana == "character" || favoritMode == "char") {
            await eliminarPersonaje(id, idUser);
          } else if(ventana == "location" || favoritMode == "loc"){     
            await eliminarLocacion(id, idUser);
          } else if (ventana == "episode" || favoritMode == "epi"){
            console.log("se eliminara el episodio")
            await eliminarEpisodio(id, idUser)
          }
   
    }

   async function saveUser(user) {
        
    const result = await createUser(user);
    if(result.success){
        setUser(result.data);
        init(result.data._id)
    } else {
        setUser(result.data[0]);
        init(result.data[0]._id)
    }   
    }

    const contextData = {
        favoritos,
        setFavoritos,
        favoritosEpisode,
        favoritosLocation,
        setFavoritosEpisode,
        setFavoritosLocation,
        user,
        setUser,
        saveUser,
        modalUser, 
        setModalUser,
        favoritMode, 
        setFavoritMode,
        deleteItemDB
    };

    return <UserContext.Provider value={contextData}>{children}</UserContext.Provider>;
};

export { UserContext };

export default RickProvider;

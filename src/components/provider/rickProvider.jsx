import React, { createContext, useContext, useEffect, useState } from "react";
import { createUser } from "../../services/user.service";
import { createEpisode, eliminarEpisodio, optenerEpisodios } from "../../services/favoritoEpisodio";
import { createPersonaje, eliminarPersonaje, optenerPersonajes } from "../../services/favoritoPersonaje";
import { createLocacion, eliminarLocacion, optenerLocaciones } from "../../services/favoritoLocacion";
import { Sync } from "@mui/icons-material";

const UserContext = createContext(null);

const RickProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);
    const [favoritosLocation, setFavoritosLocation] = useState([]);
    const [favoritosEpisode, setFavoritosEpisode] = useState([]);
    const [user, setUser] =useState("");
    const [modalUser, setModalUser] = useState(false);
    const [favoritMode, setFavoritMode] = useState(""); // me permite abrir la info de las card de los favoritos agregados
    const [deleteItem, setDeleteItem] = useState({});
   async function saveFavorite() {
        if (!user) {
           return;
            
        }

        // guardar en la base de datos 

        await createEpisode(favoritosEpisode.at(-1));
        await createLocacion(favoritosLocation.at(-1));
        await createPersonaje(favoritos.at(-1));

      
       /* if (favoritosEpisode.length < responseEpisode.data.length) {
            console.log("el arreglo tiene menos objetos");
            
        } else if (favoritosLocation.length < responseLocaciones.data.length){

        }else if() {

        }*/
        //console.log()
        //console.log(favoritosEpisode)
       //const episode = await createEpisode()
        
    }
    // inicio de la aplicacion 
   async function init() {
        //
        const responseEpisode = await optenerEpisodios(user._id)
        const responsePersonaje = await optenerPersonajes(user._id)
        const responseLocaciones = await optenerLocaciones(user._id)
        setFavoritos(responsePersonaje.data)
        setFavoritosEpisode(responseEpisode.data)
        setFavoritosLocation(responseLocaciones.data)

        //console.log("se inicio ", responsePersonaje.data)
        
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
    } else {
        setUser(result.data[0]);
    }   
    }

    useEffect(() => {
      saveFavorite();
    }, [favoritos, favoritosEpisode, favoritosLocation])

    useEffect(() =>{
        init();
    }, [user])

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

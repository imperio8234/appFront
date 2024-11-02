import { CircularProgress, Divider } from "@mui/material"
import { CardCharacter } from "../personajes/cardCharacter"
import { useRick } from "../../provider/useRick"
import { CardLocation } from "../ubicaciones/cardLocation";
import { CardEpisode } from "../episodios/cardEpisode";
import { User } from "../../user/user";
import { Favoritos } from "../favoritos/favoritos";

export const Body = ({dataObtained, setOpenModal, loading, infoModal, getEpiCharLoca}) => {
  const {
         setFavoritos, 
         favoritos,
         favoritosEpisode,
        favoritosLocation,
        setFavoritosEpisode,
        setFavoritosLocation,
        setModalUser,
        modalUser,
        user, 
        setFavoritMode
        
        } = useRick();

  const render= (data, index) => {
    if (getEpiCharLoca == "character") {
      const isFavorito = favoritos.some(fav => fav.id === data.id)
      return <CardCharacter getEpiCharLoca={getEpiCharLoca} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritos} setFavoritos={setFavoritos} isFavorito={isFavorito}/>
    } else if(getEpiCharLoca == "location"){
      const isFavorito = favoritosLocation.some(fav => fav.id === data.id)
      return <CardLocation getEpiCharLoca={getEpiCharLoca} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritosLocation} setFavoritos={setFavoritosLocation} isFavorito={isFavorito} />
    } else if (getEpiCharLoca == "episode"){
      const isFavorito = favoritosEpisode.some(fav => fav.id === data.id)
      return <CardEpisode getEpiCharLoca={getEpiCharLoca} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritosEpisode} setFavoritos={setFavoritosEpisode} isFavorito={isFavorito} /> 
    } 

  }
    return (
        <div className="p-5 flex flex-row gap-6 flex-wrap justify-center pt-20">
          {
            loading?
            <CircularProgress />
            :
            
             <>
             
             {
               getEpiCharLoca == "favorito"
               ?
               <Favoritos setFavoritMode={setFavoritMode} setOpenModal={setOpenModal} infoModal={infoModal} />
              :
               dataObtained &&
               dataObtained.map((data, index) => {
                 
                 return (
                   render(data, index)
                 )
               })
             }
             </>
              
            
          }
          {modalUser&&<User />}
        </div>
    )
}
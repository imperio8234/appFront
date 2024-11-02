import { useRick } from "../../provider/useRick"
import { CardEpisode } from "../episodios/cardEpisode";
import { CardCharacter } from "../personajes/cardCharacter";
import { CardLocation } from "../ubicaciones/cardLocation";

export const Favoritos = ({dataObtained, setOpenModal, loading, infoModal, setFavoritMode, isFavorito}) => {
    const {
        setFavoritos, 
        favoritos,
        favoritosEpisode,
       favoritosLocation,
       setFavoritosEpisode,
       setFavoritosLocation,
       setModalUser,
       modalUser,
       user
       
       } = useRick();

    return (
       <>
       {
        user?
        <div className="p-5 flex flex-col gap-6 flex-wrap justify-center pt-20 w-full text-center">
            <div>
                <p>Holaa! {user.nombre} estos son tus favoritos</p>
            </div>
        {/**personajes favoritos */}
        <div>
            <div className="p-5 flex flex-row gap-6 flex-wrap justify-center w-full">
              <p>mis personajes favoritos</p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-6">
               {    
                     favoritos.map((data, index) => {
                        const isFavorito = favoritos.some(fav => fav.id === data.id)
            
                          return (
                             <CardCharacter setFavoritMode={setFavoritMode} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritos} setFavoritos={setFavoritos} isFavorito={isFavorito}/>
                          )
                     })
                }
            </div>

        </div>
        {/**localidades favoritas */}
        <div className="p-5 flex flex-row gap-6 flex-wrap justify-center w-full">
            <div>
               <p>localidades favoritas</p>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6">
                {     
                     favoritosLocation.map((data, index) => {
                        const isFavorito = favoritosLocation.some(fav => fav.id === data.id)
                          return (
                             <CardLocation setFavoritMode={setFavoritMode} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritosLocation} setFavoritos={setFavoritosLocation} isFavorito={isFavorito} />
                        )
                     })
                }
            </div>

        </div>
        {/** episodios favoritos */}
        <div className="p-5 flex flex-row gap-6 flex-wrap justify-center w-full">
            <div>
             <p>
                Episodios favoritos</p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-6">
                {       
                     favoritosEpisode.map((data, index) => {
                        const isFavorito = favoritosEpisode.some(fav => fav.id === data.id)
            
                          return (
                             <CardEpisode setFavoritMode={setFavoritMode} setModalUser={setModalUser} user={user} infoModal={infoModal} setOpenModal={setOpenModal} data={data} key={index} favoritos={favoritosEpisode} setFavoritos={setFavoritosEpisode} isFavorito={isFavorito} /> 
                        )
                     })
                }
            </div>
        </div>
    </div>
    :
     <p>no tienes favoritos</p>
       }      
       </>
    )
}
import { Favorite } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from "@mui/material"
import { useRick } from "../../provider/useRick"

export const CardEpisode = ({data, user, setModalUser, setFavoritos, favoritos, isFavorito, infoModal, setFavoritMode, getEpiCharLoca}) => {
     
    const {deleteItemDB} = useRick()
    const addfavorites = () => {
        // se verifica que hay un usuario para guardar el favorito
        if (!user) {
            setModalUser(true)
            return;
        }
        setModalUser(false)
        
        //severifica si ya se agrego a favoritos de lo contratio se elimina
        if (isFavorito) {
            if (favoritos) {
                // funcion para eliminar el item de la base de datos 
                deleteItemDB(data.id, user._id, getEpiCharLoca, "epi")
                setFavoritos(favoritos.filter(fav => fav.id !== data.id))
            }
            return
        }
        data.idUser= user._id
        setFavoritos(favoritos?[...favoritos , data]:data)
    }
    return (
        <div className="w-[300px] h-66 bg-white rounded border shadow p-2 hover:-translate-y-1 hover:scale-110  duration-300">
         <div className="flex justify-between">
          <p className="text-xs p-2">{data.name}</p>
          <p onClick={() => {infoModal(data), setFavoritMode && setFavoritMode("epi")}} className="w-[145px] p-1 h-[30px] bg-blue-200 text-center rounded hover:bg-blue-400 cursor-pointer">Personajes</p>
        </div>
  
  <div className="flex h-16 w-68 mt-3 border-t">
    <div className="text-xs w-56 p-1 font-serif">
        <p>Fecha de lanzamiento: {data.air_date}</p>
        <p>tipo: {data.episode}</p>

    </div>
    <div className="flex self-end p-2">
        <IconButton 
        onClick={()=> addfavorites()}
        color={isFavorito?"error":""}>
            <Favorite />
        </IconButton>
    </div>
  </div>
</div>
    )
}
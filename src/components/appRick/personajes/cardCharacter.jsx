import { Favorite } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useRick } from "../../provider/useRick"
import { createPersonaje } from "../../../services/favoritoPersonaje"

export const CardCharacter = ({user, getEpiCharLoca, setModalUser ,data, setFavoritos, favoritos, isFavorito, infoModal, setFavoritMode}) =>{
    const {deleteItemDB} = useRick()
    const addfavorites = async () => {
        // se verifica que hay un usuario para guardar el favorito
        if (!user) {
            setModalUser(true)
            return;
        }
            //severifica si ya se agrego a favoritos de lo contratio se elimina
        setModalUser(false)

        if (isFavorito) {
            if (favoritos) {
                // funcion para eliminar el item de la base de datos 
                deleteItemDB(data.id, user._id, getEpiCharLoca, "char")
                // se elimina del provider 
                setFavoritos(favoritos.filter(fav => fav.id !== data.id))
            }
            return
        }
         // se agrega el id del usuario actual
        data.idUser= user._id;
        setFavoritos(favoritos?[...favoritos , data]:data)
        // guardar en la base de datos
      const response =  await createPersonaje(data);
      
    }
    return (
        <div className="w-52 h-66 bg-white rounded border shadow p-2 hover:-translate-y-1 hover:scale-110  duration-300">
                <p className="text-xs p-2">{data.name}</p>
          <div onClick={() => {infoModal(data), setFavoritMode && setFavoritMode("char")}} className="h-36 cursor-pointer flex justify-center">
             <img className="w-36" src={data.image} alt="imagen" />
          </div>
          <div className="flex h-16 w-68 mt-3 border-t">
            <div className="text-xs w-48 p-1 font-serif">
                <p>especie: {data.species}</p>
                <p>tipo: {data.type}</p>

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
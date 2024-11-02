import { Pagination } from "@mui/material"
import { Bar } from "./components/Bar"
import { Body } from "./components/body"
import { useEffect, useState } from "react"
import { getEpisodes } from "../../services/rickEpisodes"
import { useRick } from "../provider/useRick"
import { ModalPersonaje } from "./components/ModalPersonajes"
import { User } from "../user/user"

export const  Home = () => {
    const [page, setPage] = useState(1);
    
    const [getEpiCharLoca, setGetEpiCharLoca] = useState("character"); // se optiene el estado del usuario que desea ver, personajes, locaciones oepisodios
    const [dataObtained, setDataObtained] = useState([]);
    const [pagesData, setPagesData] = useState("");
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [dataCard, setDataCard] = useState({});
   
   const {setFavoritos, favoritos, favoritMode, setFavoritMode} = useRick();
    // se pide la informacion de acuerdo a la pagina y lo que el usuario pulse, episodios personajes o locaciones 
    const getData = async () => {
        if (getEpiCharLoca == "favorito") {
            setPagesData(1)
            setDataObtained([])
            return;
        }
        setFavoritMode("") // se formatea sl favoritemode para no dar error en otros componentes 
        setDataObtained([]);
        setLoading(true)
        try {
           const data = await getEpisodes(getEpiCharLoca, page);
           if(!data.data){
             return;
           }
           setDataObtained(data.data.results);
           setPagesData(data.data.info.pages);
           setLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

    //se actualiza cada que se cambia un estado
    useEffect(() => {
   getData();
    }, [page, getEpiCharLoca])

    // funcion para actualizar la pagina de la peticion
    const handleChange = (event, value) => {
        setPage(value);
      };

      const infoModal = (data, ) => {
       setOpenModal(!openModal);
       if (data) {
        setDataCard(data)
        return
       }
      }
      
    return(
        <div className="min-h-[600px]">
         <Bar setGetEpiCharLoca={setGetEpiCharLoca} />
         <Body loading={loading} dataObtained={dataObtained} infoModal={infoModal} getEpiCharLoca={getEpiCharLoca}/>
         <Pagination className="fixed bottom-4 " count={parseInt(pagesData)} page={page} onChange={handleChange} />
         {openModal&&<ModalPersonaje favoritMode={favoritMode} getEpiCharLoca={getEpiCharLoca} dataCard={dataCard} infoModal={infoModal}/>}
        </div>
    )
}
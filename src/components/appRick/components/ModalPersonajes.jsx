import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InfoCharacter } from "../personajes/infoCharacter";
import { InfoLocation } from "../ubicaciones/infoLocation";
import { InfoEpisode } from "../episodios/infoEpisode";

export const ModalPersonaje = ({dataCard, infoModal, getEpiCharLoca, favoritMode}) =>{
  console.log(getEpiCharLoca)
    const render= () => {
      if (getEpiCharLoca == "character" || favoritMode == "char") {
        return <InfoCharacter  dataCard={dataCard} infoModal={infoModal}/>
      } else if(getEpiCharLoca == "location" || favoritMode == "loc"){     
        return <InfoLocation infoModal={infoModal} InfoLocation={dataCard}/>
      } else if (getEpiCharLoca== "episode" || favoritMode == "epi"){
       return <InfoEpisode infoEpisode={dataCard} infoModal={infoModal} /> 
      }

    }
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
           {
            render()
           }
        </div>
    )
}
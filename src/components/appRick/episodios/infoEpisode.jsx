import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const InfoEpisode = ({infoEpisode, infoModal}) => {
    
    return (
        <div className="w-10/12 h-[400px] bg-white rounded overflow-y-scroll p-3">
            <div className="p-2 flex justify-between">
            <p >{infoEpisode.name}</p>
            <p className="border border-black rounded cursor-pointer p-1 text-center" onClick={() => infoModal("")}> ver mas</p>
            </div>
            <Accordion >
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                       Personajes del episodio
                   </AccordionSummary>
                  <AccordionDetails>
                   {
                      infoEpisode.characters.map((ep, i) => {
                          return (
                              <div className="flex gap-4 text-xs" key={i}>
                                  <p>{ep}</p>
                                  <p className="underline hover:text-blue-400 cursor-pointer">ver</p>
                              </div>
                          )
                      })
                   }
                 </AccordionDetails>
                </Accordion>

        </div>
    )
}
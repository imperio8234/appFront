import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const InfoCharacter = ({dataCard, infoModal}) => {
console.log(dataCard)
    return(
        <div className="bg-white md:w-7/12 w-10/12 max-h-[600px] p-1 overflow-auto rounded" >
        <div className="w-full flex justify-between border-b p-1 mb-2">
          <p>{dataCard.name}</p>
          <p onClick={() =>infoModal("")} className="p-1 rounded border hover:bg-indigo-400 w-[150px] cursor-pointer">ver otro personage</p>
        </div>
        <div className="flex flex-col md:flex-row rounded ">
          <div className=" md:m-0 m-auto">
             <img className="rounded" src={dataCard.image} alt="rick" />
          </div>
          <div className="flex gap-7 flex flex-col">
          <div className="p-2 text-sm">
              <p>Informacion del personaje</p>
              <div className="p-3 flex flex-col border-t">
                <span>Genero : {dataCard.gender}</span>
                <span>Especie : {dataCard.species}</span>
                <span>Estado : {dataCard.status}</span>
                <span>Tipo : {dataCard.type?dataCard.type:"no presenta"}</span>
              </div>

          </div>
          <div className="p-2">
          <Accordion>
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                       Episodios
                   </AccordionSummary>
                  <AccordionDetails>
                   {
                      dataCard.episode.map((ep, i) => {
                          return (
                              <div className="flex gap-4 text-sm" key={i}>
                                  <p>{ep}</p>
                                  <p className="underline hover:text-blue-400 cursor-pointer">ver</p>
                              </div>
                          )
                      })
                   }
                 </AccordionDetails>
                </Accordion>
          <Accordion>
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2-content"
                     id="panel2-header"
                  >
                       locacion
                   </AccordionSummary>
                  <AccordionDetails>
                  <p>Nombre : {dataCard.location.name}</p>
                  <div className="flex gap-4 text-sm">
                                  <p>{dataCard.location.url}</p>
                                  <p className="underline hover:text-blue-400 cursor-pointer">ver</p>
                              </div>
                 </AccordionDetails>
                </Accordion>
          </div>
          </div>
        </div>

      </div>
    )
}
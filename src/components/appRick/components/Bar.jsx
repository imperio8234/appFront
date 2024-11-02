import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, LocationCity, PersonalVideo, Person } from "@mui/icons-material";

export const Bar = ({setGetEpiCharLoca}) => {
    return (
        <BottomNavigation
           showLabels
           className="border-b fixed w-full z-20"
          
        >
         <BottomNavigationAction onClick={() => setGetEpiCharLoca("character")} label="Personajes" icon={<Person />} />
         <BottomNavigationAction onClick={() => setGetEpiCharLoca("location")} label="Locacion" icon={<LocationCity />} />
         <BottomNavigationAction onClick={() => setGetEpiCharLoca("episode")} label="episodios" icon={<PersonalVideo />} />
         <BottomNavigationAction onClick={() => setGetEpiCharLoca("favorito")} label="Favoritos" icon={<Favorite />} />
        </BottomNavigation>
    )
} 
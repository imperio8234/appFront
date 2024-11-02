import { useState } from "react";
import { useRick } from "../provider/useRick"
import { Alert } from "@mui/material";

export const User = () => {
    const [userInput, setUserInput] =useState("");
    const {saveUser,  setModalUser} = useRick();
    const createUser = () => {
        if (!userInput) {
            return;
        }

        saveUser(userInput)
        setModalUser(false)
    }
    return(
        <div className="left-64 top-24 shadow fixed inset-0 z-40 w-[300px] h-[400px] bg-white p-6 flex flex-col gap-5">
            <div className="w-full text-center">
                Vienvenido!! a la aplicacion de rick 
            </div>

            <div className="grid grid-col-1 content-center">
                <p>Crea un usuario podras acceder a tus favoritos en cualquier momento</p>
                <div className="w-full flex justify-center m-2">
                    <input  onChange={(e) => setUserInput(e.target.value)} required className="rounded outline-none border border-black p-2 m-auto" type="text" />
                </div>

                {!userInput&&<Alert severity="error">Ingresa un usuario</Alert>}
            </div>
            <div>
            <div onClick={() =>createUser()} className="text-center w-[150px] cursor-pointer rounded h-[30px] bg-blue-100 hover:bg-blue-400 m-auto">crear usuario</div>
            <div onClick={() =>setModalUser(false)} className="mt-2 text-center w-[150px] cursor-pointer rounded h-[30px] bg-blue-100 hover:bg-blue-400 m-auto">cancelar</div>
            </div>
        </div>
    )
}
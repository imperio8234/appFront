import { useContext } from "react";
import { UserContext } from "./rickProvider";

export const useRick = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useRick can only be used inside RickProvider");
    }
    return context;
};

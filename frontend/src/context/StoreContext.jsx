import { createContext, useState } from "react";

export const StoreContext = createContext(null);


const StoreProvider = ({children})=>{
    const url = "http://localhost:3000";
    const [token, setToken] = useState("");

    const contextValue = {
        url,
        token,
        setToken,

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
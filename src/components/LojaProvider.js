import { createContext, useState} from 'react';


export const LojaContext = createContext();

function LojaProvider({children}){

    const [token, setToken] = useState("");

    return(
        <LojaContext.Provider value={{token: token, setToken: setToken}}>
            {children}
        </LojaContext.Provider>
    );

}

export default LojaProvider;
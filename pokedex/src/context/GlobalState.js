import { GlobalContext } from "./GlobalContext";


const GlobalState = () => {


const context = {
    
}


    return(
        <GlobalContext.Provider value={context} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
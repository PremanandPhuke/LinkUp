import { createContext, useState, useEffect } from "react";

export const RightbarContext = createContext()

export const RightbarContextProvider= ({children})=>{
    const [rightbar, setRightBar] = useState(
        JSON.parse(localStorage.getItem("rightbar")) || false
    );

    const toggel =()=>{
        setRightBar(!rightbar);
    }

    useEffect (() =>{
        localStorage.setItem("rightbar", rightbar)
    }, [])


    return (
        <RightbarContext.Provider value={{rightbar, toggel}}>{children}</RightbarContext.Provider>
    )
}
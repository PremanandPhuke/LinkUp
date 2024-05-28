import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider= ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(inputs)=>{
        
        // setCurrentUser({
        //     id: 1,
        //     name: "Premanand Phuke",
        //     profilepic: "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        // })

        const res= await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)

    }

    useEffect (() =>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    );
};
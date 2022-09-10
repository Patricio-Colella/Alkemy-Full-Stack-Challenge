import React,{useState} from "react"
import "./home.css"
import Header from "./header/header"

export default function Home(){
    
    const [tipe,toogleTipe] = useState("ligth")
    const [user,setUser] = useState()
    
    return(
        <div id="home">
            <Header tipe={tipe} toogleTipe={toogleTipe} user={user} setUser={setUser}/>     
        </div>
    )
}
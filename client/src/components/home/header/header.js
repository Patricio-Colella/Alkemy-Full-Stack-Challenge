import React,{useState} from "react"
import libro from "../utils/libro.png"
import anteojos from "../utils/anteojos.png"
import anteojos_dark from "../utils/anteojos de sol.png"
import sun from "../utils/sun.png"
import moon from "../utils/moon.png"
import style_ligth from "./header.module.css"
import style_dark from "./header_dark.module.css"
import axios from "axios"



export default function Header({tipe,toogleTipe,user,setUser}){
    
    const [display,setDisplay] = useState("nodisplay")
    const [input,setInput] = useState({user_name:""})

    const style={
        ligth:style_ligth,
        dark:style_dark
    }

    const utils={
        ligth:{
            toogleButton:sun,
            glasses:anteojos
        },
        dark:{
            toogleButton:moon,
            glasses:anteojos_dark
        }
    }

    function toogle(){
        tipe==="ligth"?toogleTipe("dark"):toogleTipe("ligth")
    }

    async function registerUser(){
        const res = await axios.post("http://localhost:3001/user",{...input})
        setUser(res.data[0])
        setDisplay("nodisplay")
    }

    return tipe&&(
        <header id={style[tipe].header}>
            <div id={style[tipe].marca}>
                <div id={style[tipe].logo}>
                    <img id={style[tipe].anteojos} src={utils[tipe].glasses}></img>
                    <img id={style[tipe].libro} src={libro}></img>
                </div>
                <h1>MyVirtualAccountant</h1>
            </div>
            <img id={style[tipe].toogle} src={utils[tipe].toogleButton} onClick={toogle}></img>
            <div id={style[tipe].user}>
                <span onClick={()=>{!user&&setDisplay("display")}}>{user?user.user_name:"ingresa"}</span>
            </div>
            <div id={style[tipe][display]}>
                <label>nombre</label>
                <input onChange={(e)=>setInput({...input,user_name:e.target.value})}/>
                <button onClick={registerUser}>registrar</button>
            </div>
        </header>
    )
}
import React from "react";  
import '@ds.e/scss/lib/Button.css'

interface BtnProps{
    title:string,
    children: React.ReactNode,
    onClick: ()=>void

}
const Button:React.FC<BtnProps> = ({title, onClick, children})=>{
    return <button className="btn btn-primary" onClick={onClick} title={title}>{children}</button>

}

export default Button;
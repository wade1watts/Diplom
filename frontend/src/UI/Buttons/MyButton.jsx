import React from "react"; 
import cl from './MyButton.module.css'
import { useNavigate } from "react-router-dom";

function MyButton(props){
  const router = useNavigate()
  return(
      <button className={cl.MyButton} onClick={()=>router(props.link)}>{props.name}</button>
    )
}
export default MyButton;
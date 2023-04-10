import React from "react"; 
import cl from './SideButton.module.css'

function SideButton(props){
  console.log(props)
  return(
      <button className={cl.SideButton}>{props.name}</button>
    )
}
export default SideButton;
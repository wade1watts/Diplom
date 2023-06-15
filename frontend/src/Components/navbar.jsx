import React from "react"; 
import MyButton from '../UI/Buttons/MyButton';
function Navbar(){
    const button1 = 'Карта';
    const link1 = '/';
    const button2 = 'Источники';
    const link2 = '/source';

    return(
        <div className="navbar">
            <MyButton name ={button1} link={link1}/>
            <MyButton name ={button2} link={link2}/>
          
        </div>
    )
}
export default Navbar;
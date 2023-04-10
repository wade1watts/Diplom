import React from "react"; 
import MyButton from '../UI/Buttons/MyButton';
function Navbar(){
    const button1 = 'Карта';
    const link1 = '/map';
    const button2 = 'Источники';
    const link2 = '/source';

    // const button2 = 'Источники';
    // const button3 = 'Кнопка 3';
    return(
        <div className="navbar">
            <MyButton name ={button1} link={link1}/>
            <MyButton name ={button2} link={link2}/>
            {/* <MyButton name ={button3} link={link}/> */}
        </div>
    )
}
export default Navbar;
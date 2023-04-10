import React from "react"; 
import SideButton from '../UI/Buttons/SideButton';
import './Map.css'
function Sidebar(){
    // const button1 = 'Фильтр 1';
    // const button2 = 'Фильтр 2';
    // const button3 = 'Фильтр 3';
    // const button4 = 'Фильтр 4';
    // const button5 = 'Фильтр 5';
    // const button6 = 'Фильтр 6';
    // const button7 = 'Фильтр 7';
    // const button8 = 'Фильтр 8';
    const data = ['1','2']
    return(
        <div className="sidebar">
            <div className="filtres"><h1>Фильтры</h1></div>
            { data.map((name) =>
                <SideButton key={name} name ={name}/>
            )}
            {/* <SideButton name ={button1}/>
            <SideButton name ={button2}/>
            <SideButton name ={button3}/>
            <SideButton name ={button4}/>
            <SideButton name ={button5}/>
            <SideButton name ={button6}/>
            <SideButton name ={button7}/>
            <SideButton name ={button8}/> */}
        </div>
    )
}
export default Sidebar;
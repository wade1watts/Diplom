import React, { useState } from 'react';
import './Modal.css';


const Modal = ({active, setActive, children}) => {

    return (
        <div className={active[0] ? 'modal active' : 'modal'} 
        onClick={() => setActive(false)}>
            <div className={active[0] ? 'modal__content active' : 'modal__content'} 
            onClick={e => e.stopPropagation()}>

               <p>Широта: </p> {active[1]} <br/>
               <p>Долгота: </p> {active[2]} <br/>
               <p>id: </p> {active[3]} <br/>
                {children}
                
            </div>
        </div>
    );
};

export default Modal;
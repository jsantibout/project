import React from 'react'
import worldIcon from './assets/worldIcon.png'


export default function Header() {   
    return(
        <nav className="Header">
            <img src={worldIcon} />
            <h3>My Travel Journal</h3>
        </nav>
    )
    
}



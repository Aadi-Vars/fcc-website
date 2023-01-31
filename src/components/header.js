import './header.css'
import {Link,NavLink,NavLIvk} from 'react-router-dom'
export const Header= ()=>{

 

    return (


        <header>
            <div id="header_subdiv">

                <NavLink to="/" id="fcc_label">FCC</NavLink>
            </div>
            
            <ul className="header_buttons">
                
                <li><NavLink to={"/"} className="button">Home</NavLink></li>
                <li><NavLink to={"sponser"} className="button">Sponser</NavLink></li>
                <li><NavLink to={"contact"} className="button">Contact</NavLink></li>
            </ul>

         
            
        </header>

    )
    }

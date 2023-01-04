import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import '../styles/nav.css'


function NavBar(){

    return(
        <nav>
        <div className='navbar'>
        <div className="logo-container">
           <a className="navbar-brand" href="/">
            <img src="boat.png" width="50" height="50"  alt="page title" />
                <p className="logo-text">Next Level Marine</p>
           </a>
        </div>
            
            <div className='link-box'>
            <Nav activeKey='/home'>
                {/* <Nav.Link as={Link} to='/'>
                    Home
                </Nav.Link> */}
            <Nav.Item>
                <Nav.Link as={Link} to='/About'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/Services'>Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/Contact'>Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/cart'> <FontAwesomeIcon icon={faShoppingCart} size="2x"/></Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
        
         </div>
         </nav>
)
}
         


export default NavBar
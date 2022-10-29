import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
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
                <button className='nav-btn'>(561)-301-6062</button>
            </Nav.Item>
            </Nav>
            </div>
        
         </div>
         </nav>
)
}
         


export default NavBar
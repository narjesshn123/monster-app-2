import './Navbar.css';                      
import { Link } from 'react-router-dom';
export default function Navbar (){
    return(
        <nav className="nav">
            <a href="/" className="site-title">
                Site Name
            </a>
            <ul>
                <li className='active'>
                 
                        <Link to="/Home">pricing</Link>
                       
                    </li>
                    <li>
                   
                        <Link to="/monsters">About</Link>
                        
                </li>
            </ul>
        </nav>
    )
}
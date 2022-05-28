import './Navbar.css';
import {Container} from 'react-bootstrap'
export const Home=()=>{
    return(
        <div className="home">
<div className='row'>
    <div className='col'>
           <a href='/'>
               <img src='https://images.unsplash.com/photo-1540845692348-b9d2bc813a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'></img>
           </a>
           </div>
           <div className='col'>
           <p>welcome to this page</p>
           </div>
         
            </div>
        </div>
    )
}
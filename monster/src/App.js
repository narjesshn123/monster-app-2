import './App.css';
import { MonsterPage } from './component/MonsterPage';
import MonsterList from './component/monsterList/MonsterList';
import Home from './component/Home';  
import {BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Footer from './component/Footer'; 
import './component/Navbar.css'  
   
function App() {
  return (
    <div className="main-container">
     
     
      <div className='main-flex'>
  
     <BrowserRouter>
       <Routes>
      
         <Route  path='/' element={<Main/>}>
         <Route exact path='/monsters' element={<MonsterList/>}/>
           <Route path='monsters/:monsterID' element={<MonsterPage/>}/>
           <Route exact path='/home' element={<Home/>}/>
         </Route>
         
        
       </Routes>
       </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

const Main = ()=>{
  return(
    <div className='menu'>
 <nav className="nav">
            <a href="/" className="site-title">
               Monster Page         
            </a>
            <ul>
                <li className='active'>
                
                        <Link to="/Home">
                          <a>home</a>
                        </Link>
                       
                    </li>
                    <li>
                 
                        <Link to="/monsters">
                          <a>monster</a>
                          </Link>
                       
                </li>
            </ul>
        </nav>
    {/* <ul>
    <li><Link to={"/Home"}>home</Link></li>
    <li><Link to={"/monsters"}>monster</Link></li>
   </ul> */}
   <Outlet/>

   </div>
  )
}

export default App;

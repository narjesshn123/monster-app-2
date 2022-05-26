import './App.css';
import { MonsterPage } from './component/MonsterPage';
import MonsterList from './component/monsterList/MonsterList';
import {Home} from './component/Home'    
import {BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'; 
   
function App() {
  return (
    <div className="App">
    
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
  );
}

const Main = ()=>{
  return(
    <div>
    <ul>
    <li><Link to={"/Home"}>home</Link></li>
    <li><Link to={"/monsters"}>monster</Link></li>
   </ul>
   <Outlet/>
   <footer>
     i am a footer
   </footer>
   </div>
  )
}

export default App;

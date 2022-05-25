import './App.css';
import { MonsterPage } from './component/MonsterPage';
import MonsterList from './component/monsterList/MonsterList'       
import { Route, Router, Link } from 'react-router-dom'; 
import {home} from './component/home'    
function App() {
  return (
    <div className="App">
 <ul>
   <li><Link to={"/"}>home</Link></li>
   <li><Link to={"/home"}>monster</Link></li>
   </ul>
      
    <Router>
      <Route exact path='/' element={<home/>}/>
      <Route path='/home' element={<MonsterList/>}/>
      <Route path='/card' element={<MonsterPage/>}/>
      </Router>

    </div>
  );
}

export default App;

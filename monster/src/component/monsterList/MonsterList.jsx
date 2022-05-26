import React from "react";
import { useEffect, useState } from "react";  
import {MonsterCard} from '..//monsterCard/MonsterCard'
import './Monsterlist.css'
import { Link } from "react-router-dom";
 const MonsterList = () =>{
  const[monsterlist, setmonsterlist] = useState([])
  const[filter, setfilter] = useState('')
    const getMonster = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>Response.json())
        .then(data=>setmonsterlist(data))
    }
    useEffect(()=>{
      document.title="monster";
      getMonster()
    },[])
    
    return(
       <>
      <div>
         <div>
            <button>
              search
              <input type={"search"} 
              onChange={e=>setfilter(e.target.value)}>
              </input>
             </button>
      </div>
       <div className="monster">
{monsterlist.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).length===0?
<div>there is no moster with this name</div>:

monsterlist.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase()))
     .map(monster=>(
       
                <div key={monster.id}>
                    <Link to={`/monsters/${monster.id}`}>
                  <MonsterCard name={monster.name} 
                  image={"https://robohash.org/"+monster.username}
                  email={monster.email}/>
                  </Link>
                </div>
                  ))}
       </div> 
       </div>
       </>
    )
}
export default MonsterList
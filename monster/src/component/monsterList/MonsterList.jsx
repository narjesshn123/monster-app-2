import React from "react";
import { useEffect, useState } from "react";  
import {MonsterCard} from '..//monsterCard/MonsterCard';
import {Container, Col, Row} from 'react-bootstrap'
import './Monsterlist.css';                                       
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
      <Container>
      <hr style={{color:"aquamarine"}}/>
        <hr style={{color:"aquamarine"}}/>
         <Container className="search">
            <button>
              search
              <input type={"search"} 
              onChange={e=>setfilter(e.target.value)}>
              </input>
             </button>
      </Container>
       <Row>
        <hr style={{color:"aquamarine"}}/>
        <hr style={{color:"aquamarine"}}/>
        <hr style={{color:"aquamarine"}}/>
{monsterlist.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).length===0?
<Row className="no-monster">there is no moster with this name</Row>:

monsterlist.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase()))
     .map(monster=>(
       
                <Col  key={monster.id}>
                    <Link to={`/monsters/${monster.id}`}>
                  <MonsterCard className="monsters" name={monster.name} 
                  image={"https://robohash.org/"+monster.username}
                  email={monster.email}/>
                  </Link>
                </Col>
                  ))}
       </Row> 
       </Container>
       </>
    )
}
export default MonsterList
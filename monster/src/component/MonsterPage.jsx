import './MonsterPage.css';
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
export const MonsterPage = () =>{
const param = useParams()
    const[users, setUser]=useState(
    {
          id: 1,
          name: "",
          username: "",
          email: "",
    }
    )
    const getMoon = ()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${param.monsterID}`)
        .then(Response => Response.json())
        .then(data=>setUser(data))
    }
    useEffect(() =>{
        getMoon()
    },[])
      
    return(
        <>
       
        <Container className="moon">
        <a style={{marginTop:"1rem"}}> <Link to={"/monsters"}><svg xmlns="http://www.w3.org/2000/svg" width="86" height="40" fill="currentColor" class="bi bi-caret-left-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z"/>
</svg></Link></a>
            <Col >
        <img src={"https://robohash.org/"+users.username}/>
        <h1>{users.name}</h1>
        <h5>{users.email}</h5>
        </Col>
        </Container>
        <hr/>
      
        </>
    )
}
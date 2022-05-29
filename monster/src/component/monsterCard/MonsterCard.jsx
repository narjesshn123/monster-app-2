import { useEffect } from "react";
import { Container } from "react-bootstrap";
import './Monstercard.css'
 export const MonsterCard = ({image="", name="",email=""}) =>{
    useEffect(()=>{
    
    },[])
    return(
      <Container className="monsters"> 
      <span >
        <img src={image}/>
        <h4>{name}</h4>
        <p>{email}</p>
      </span>
        </Container>

    )
}

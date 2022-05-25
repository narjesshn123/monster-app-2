import { useEffect } from "react";

import './Monstercard.css'
 export const MonsterCard = ({image="", name="",email=""}) =>{
    useEffect(()=>{
      document.title="mons"
    },[])
    return(
      <> 
      <span >
        <img src={image}/>
        <h1>{name}</h1>
        <p>{email}</p>
      </span>
        </>

    )
}

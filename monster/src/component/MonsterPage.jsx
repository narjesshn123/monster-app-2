import './MonsterPage.css';
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';
export const MonsterPage = () =>{
    const[users, setUser]=useState(
    {
          id: 1,
          name: "",
          username: "",
          email: "",
    }
    )
    const getMoon = ()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(Response => Response.json())
        .then(data=>setUser(data))
    }
    useEffect(() =>{
        getMoon()
    },[])
      
    return(
        <>
        <div className="moon">
        <img src={"https://robohash.org/"+users.username}/>
        <h1>{users.name}</h1>
        <h5>{users.email}</h5>
        </div>
        <Link to={"./home"}>go to back</Link>
        </>
    )
}
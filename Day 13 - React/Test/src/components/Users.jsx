import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import User from './User';

const Users = () => {
    const [usersArr]=useState([
        {id:uuid() ,name:"Belal" ,age:20},
        {id:uuid() ,name:"Mariam" ,age:25},
        {id:uuid() ,name:"Ali" ,age:30},
        {id:uuid() ,name:"Sohila" ,age:12},
        {id:uuid() ,name:"Ahmed" ,},

    ])
    console.log(usersArr);
    return (
       <div>
           {/* {usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age}></User>)} */}
           {/* {usersArr.map((u)=><User key={u.id} user={u}></User>)} */}
           {usersArr.map((u)=><User key={uuid()} {...u}></User>)}
          
           </div>
    );
}

export default Users;


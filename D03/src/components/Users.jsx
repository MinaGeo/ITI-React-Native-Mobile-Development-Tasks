import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import User from './User';
import AddUser from './AddUser';
import RecipeReviewCard from './MuiCard';

const Users = () => {
    const [usersArr , setUsers]=useState([
        {id:uuid() ,name:"Belal" ,age:20},
        {id:uuid() ,name:"Mariam" ,age:25},
        {id:uuid() ,name:"Ali" ,age:30},
        {id:uuid() ,name:"Sohila" ,age:12},
        {id:uuid() ,name:"Ahmed" ,age:22},

    ])
    // console.log(usersArr);
    const incrementAgeFun=(userId)=>{
        setUsers((oldUsers)=>oldUsers.map((u)=>u.id===userId?{...u,age:u.age+1}:u))
        // // console.log(userId);
        // const idx=usersArr.findIndex((u)=>u.id===userId)
        // // console.log(idx);
        // usersArr[idx]={...usersArr[idx],age:usersArr[idx].age+1}
        // // console.log(usersArr);
        // // setUsers([...usersArr])
        //  setUsers((oldUsers)=>[...oldUsers])
    }
    const addUserFun=(data)=>{
        // console.log(data);
        // usersArr.push(data)
        setUsers([...usersArr,{...data,id:uuid() ,age:+(data.age)}])
    }
    return (
       <div>
        <AddUser addUserFun={addUserFun}></AddUser>    
           {usersArr.map((u)=><RecipeReviewCard key={u.id} id={u.id} name={u.name} age={u.age} incrementAgeFun={incrementAgeFun}></RecipeReviewCard>
        //    <User key={u.id} id={u.id} name={u.name} age={u.age} incrementAgeFun={incrementAgeFun}>
        //     <button>done</button>
        //     <button>done</button>
        //     <button>done</button>
        //     <button>done</button>

        //    </User>
        )}
           {/* {usersArr.map((u)=><User key={u.id} user={u}></User>)} */}
           {/* {usersArr.map((u)=><User key={uuid()} {...u}></User>)} */}
          
           </div>
    );
}

export default Users;


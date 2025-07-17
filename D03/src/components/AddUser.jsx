import { useState } from "react";
import classes from"../styles/AddUser.module.css"
const AddUser = ({addUserFun}) => {
    const [user,setUser]=useState({name:"" ,age:""})
    const handleSubmit=(event)=>{
          event.preventDefault()
          addUserFun(user)
          setUser({name:"",age:""})
    }
    // const handleChangeName=(event)=>{
    //     setUser({...user,name:event.target.value});
    // }
    // const handleChangeAge=(event)=>{
    //     setUser({...user,age:event.target.value});
    // }
    const handleChange=(event)=>{
        // console.log(event.target.value ,event.target.name);
        const {name, value}= event.target
        setUser({...user,[name]:value});   //computed property
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input name="name" value={user.name} onChange={handleChange}></input>
            <br></br>
            <label>Age : </label>
            <input name="age" value={user.age} onChange={handleChange}></input>
            <br></br>

            <button className={classes.btn} type="submit">Submit</button>
           </form>
        </div>
    );
}

export default AddUser;

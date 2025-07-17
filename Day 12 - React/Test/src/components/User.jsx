const User=(props)=>{
    console.log(props);
    const {id,name,age}= props
    return<div style={{backgroundColor:"violet" ,margin:"15px" ,padding:10}}>
        <div>id : {id}</div>
        <div>Name : {name}</div>
        <div>age : {age}</div>

    </div>
}
export default User;
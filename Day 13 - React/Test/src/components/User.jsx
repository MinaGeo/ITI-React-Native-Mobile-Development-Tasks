import Types from "prop-types"

const User=(props)=>{
    console.log(props);
    const {id,name,age}= props
    return<div style={{backgroundColor:"violet" ,margin:"15px" ,padding:10}}>
        <div>id : {id}</div>
        <div>Name : {name}</div>
        {/* <div>age : {age?age:18}</div> */}
        {/* <div>age : {age||18}</div> */}
        {age>0&&<div>age : {age}</div>}
        {props.children}
    </div>
}
//prop Types
User.propTypes = {
    id: Types.string.isRequired,
    name:Types.string.isRequired,
    age:Types.number,
}

//Default props
// User.defaultProps = {
//     age: 22,
// }
export default User;

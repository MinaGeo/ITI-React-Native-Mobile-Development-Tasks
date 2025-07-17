import Types from "prop-types";
import { memo } from "react";
import classes from "../styles/User.module.css"
const User = (props) => {
//   console.log(props);
  const { id, name, age, children ,incrementAgeFun} = props;
  const handleClick=(e)=>{
    //   console.log(e);
    incrementAgeFun(id)

    // age++;
  }
  return (
    <div className={classes.user}>
      <div>id : {id}</div>
      <div>Name : {name}</div>
      {/* <div>age : {age?age:18}</div> */}
      {/* <div>age : {age||20}</div> */}
      {age > 0 && <div>age : {age}</div>}
      {/* <div>{children}</div> */}
      <button className={classes.btn} onClick={handleClick}>increment age</button>
      <button className="btn btn-danger">delete</button>
    </div>
  );
};
User.propTypes = {
  id: Types.string.isRequired,
  name: Types.string.isRequired,
  age: Types.number,
};
// User.defaultProps={
//     age:22
// }
export default memo(User);

// import { Fragment } from "react";
// import "./App.css";
import BootstrapCard from "./components/componentsInteaction/BootstrapCard";
import Root from "./components/componentsInteaction/Root";
import Task from "./components/Task";
import User from "./components/User";
import Users from "./components/Users";
import "bootstrap/dist/css/bootstrap.css"
function App() {
  var x = "G1 React native";
  // "background-color:red ; color:white ; margin :10px;"
  // var objstyle=

  return (
    <>
    {/* <Root></Root> */}
    <BootstrapCard></BootstrapCard>
   <Users></Users>
    {/* <Task test="hi"></Task> */}
    {/* <label htmlFor="in">Name : </label>
    <input id="in"></input>
      <div style={{backgroundColor:"red" , color:"white" ,margin:"50px"}}>Hello {5 + 2 / 2 - 1}</div>
      <div className="C1">Hi {5 + 2 / 2 - 1}</div> */}
    </>
  );
}

export default App;

import axios from "axios";
import { Component, PureComponent } from "react";

class Task extends Component{

    constructor(){
        super();
        // console.log(props);
        this.state={x:4,task:null}
        console.log("constructor");
    }
    // state={task:{title:"React" , completed:false}}
    componentDidMount(){
        console.log("componentDidMount");
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res=>this.setState({task:res.data}))
        // fetch("https://jsonplaceholder.typicode.com/todos/1")
        // .then(res=>res.json()).then(data=>this.setState({task:data}))   
     }



    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render(){
        var x="1.jpg"
        console.log("render");
        const handleClick=()=>{
            // this.state.task.completed=true
            // console.log( this.state.task.completed);
            // this.setState({task:{...this.state.task,completed:true}})
            this.setState((oldState)=>{ return{task:{...oldState.task,completed:true}}})
        }
        if(!this.state.task) return <div>Loading ......</div>
     return <div>Task of {this.state.task.title} ,  {this.state.task.completed?"Done " :"inprogress"} <br>
     </br>
     {this.props.test}
     <img src={x}></img>
     <button onClick={handleClick}>Mark as done</button>
     </div>
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
}
export default Task;
import axios from "axios";
import { PureComponent } from "react";

class Copyright extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { x: 4, task: null };
    console.log("Constructor");
  }

  render() {
    const handleClick = () => {
      this.setState({ task: { ...this.state.task, completed: true } });
    };

    if (!this.state.task) return <div>Loading......</div>;

    const { title, completed } = this.state.task;

    return (
      <div>
        <img src="user.svg" alt="User" />
        <div>Title: {title}</div>
        <div>Completed: {completed ? "Yes" : "No"}</div>
        <button onClick={handleClick}>Mark as done</button>
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => this.setState({ task: res.data }));
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  // Uncomment this method if you need it
  // shouldComponentUpdate() {
  //   console.log("ShouldComponentUpdate");
  //   return true;
  // }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
}

export default Copyright;

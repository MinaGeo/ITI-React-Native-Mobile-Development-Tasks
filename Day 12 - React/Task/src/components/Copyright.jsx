import { Component } from "react";

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerName: props.name
        };
    }

    render() {
        return (
            <div>
                <br />
                © All rights reserved to {this.state.ownerName}
            </div>
        );
    }
}

export default Copyright;

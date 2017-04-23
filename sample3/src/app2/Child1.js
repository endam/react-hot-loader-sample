import React from "react";

export default class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Child1</h2>
                <input type="text" onChange={this.props.onTextChange} />
                <p>{ this.props.message }</p>
            </div>
        )
    }
}


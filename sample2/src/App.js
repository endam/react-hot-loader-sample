import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parent_message: '',
            child1_message: '',
            child2_message: ''
        }
        this.onTextChange.bind(this)
    }

    onChange(e) {
        this.setState({parent_message: e.target.value})
    }

    onTextChange(key, val) {
        this.setState({[key]: val})
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                <input type="text" onChange={this.onChange.bind(this)} />
                <p>{ this.state.parent_message }</p>
                <hr/>
                <Child1 onTextChange={(e) => {
                    this.onTextChange("child1_message", e.target.value)
                }} message={this.state.child1_message} />
                <hr/>
                <Child2 onTextChange={(e) => {
                    this.onTextChange("child2_message", e.target.value)
                }} message={this.state.child2_message} />
            </div>
        )
    }
}


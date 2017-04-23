import React from "react";

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
                <h1>App1</h1>
                <input type="text" onChange={this.onChange.bind(this)} />
                <p>{ this.state.parent_message }</p>
                おおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお
            </div>
        )
    }
}


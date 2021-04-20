import React, { Component } from 'react'
import Personal from "./Personal"


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = e => {
        this.props.handleFormChange(e);
    }

    render() {
        return (
            <Personal handleChange={this.handleChange} />
        );
    }
}

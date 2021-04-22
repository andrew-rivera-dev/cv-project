import React, { Component } from 'react'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e, type) => {
        this.props.handleFormChange(e, type);
    }

    render() {
        return (
            <div className="main form">
                <Personal type="personal" handleChange={this.handleChange} />
                <Education type="education" handleChange={this.handleChange} />
                <Experience handleChange={this.handleChange} />
            </div>
        );
    }
}

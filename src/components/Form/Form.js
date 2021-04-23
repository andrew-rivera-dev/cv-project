import React, { Component } from 'react'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleStaticChange = this.handleStaticChange.bind(this);
    }
    
    handleStaticChange = (e, type) => {
        this.props.handleStaticChange(e, type);
    }

    handleExperienceChange = e => {
        this.props.handleExperienceChange(e);
    }

    render() {
        return (
            <div className="main form">
                <Personal type="personal" handleStaticChange={this.handleStaticChange} />
                <Education type="education" handleStaticChange={this.handleStaticChange} />
                <Experience handleExperienceChange={this.handleExperienceChange} />
            </div>
        );
    }
}

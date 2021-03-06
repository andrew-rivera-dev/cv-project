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

    handleExperienceChange = (e, expid) => {
        this.props.handleExperienceChange(e, expid);
    }

    handleAddExperience = e => {
        this.props.handleAddExperience(e);
    }

    handleDeleteExperience = (expid) => {
        this.props.handleDeleteExperience(expid);
    }

    render() {
        return (
            <div className="main form">
                <Personal type="personal" handleStaticChange={this.handleStaticChange} />
                <Education type="education" handleStaticChange={this.handleStaticChange} />
                <Experience 
                    data={this.props.data} 
                    handleAddExperience={this.handleAddExperience} 
                    handleExperienceChange={this.handleExperienceChange}
                    handleDeleteExperience={this.handleDeleteExperience}
                />
            </div>
        );
    }
}

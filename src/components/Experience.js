import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'

export default class Experience extends Component {
    render() {
        const experience = this.props.experience;
        const handleChange = this.props.handleChange;

        return (
            <div className="form-component">
                <h2>Experience</h2>
                <ExperienceItem handleChange={handleChange} /> 
            </div>
        )
    }
}

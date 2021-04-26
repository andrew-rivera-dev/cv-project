import React, { Component } from 'react'
import FormExperienceItem from './FormExperienceItem'

export default class Experience extends Component {
    render() {
        const experience = this.props.data.experience;
        const experienceElements = Object.keys(experience).map(item => {
            return <FormExperienceItem id={item} />
        });
        
        return (
            <div className="form-component">
                <h2>Experience</h2>
                <div>
                    {experienceElements}
                </div>
                <button id="add-experience-button" onClick={this.props.handleAddExperience}>Add experience</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'
import AddedExperienceItem from './AddedExperienceItem'
import { v4 as uuidv4 } from 'uuid';

export default class Experience extends Component {
    render() {
        const handleExperienceChange = this.props.handleExperienceChange;
        
        const experience = this.props.data.experience;
        const experienceItems = Object.keys(experience);
        const filteredItems = experienceItems.filter(item => item !== "defaultExperience");

        const filteredElements = filteredItems.map(item => {
            return <AddedExperienceItem key={uuidv4()} type={item} handleExperienceChange={handleExperienceChange} />
        })
        
        return (
            <div className="form-component">
                <h2>Experience</h2>
                <DefaultExperienceItem type="defaultExperience" handleExperienceChange={handleExperienceChange} />
                <div>
                    {filteredElements}
                </div>
                <button id="add-experience-button" onClick={this.props.handleAddExperience}>Add experience</button>
            </div>
        )
    }
}

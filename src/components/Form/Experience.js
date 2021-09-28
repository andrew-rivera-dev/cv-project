import React from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'
import AddedExperienceItem from './AddedExperienceItem'

export default function Experience(props) {
    const {
        handleAddExperience,
        handleExperienceChange,
        handleDeleteExperience
    } = props;
    
    const experience = props.data.experience;
    const experienceItems = Object.keys(experience);
    const filteredItems = experienceItems.filter(item => item !== "defaultExperience");

    const filteredElements = filteredItems.map(item => {
        return <AddedExperienceItem key={item} expid={item} handleExperienceChange={handleExperienceChange} handleDeleteExperience={handleDeleteExperience} />
    });
    
    return (
        <div className="form-component">
            <h2>Experience</h2>
            <DefaultExperienceItem expid="defaultExperience" handleExperienceChange={handleExperienceChange} />
            {filteredElements}
            <button id="add-experience-button" onClick={handleAddExperience}>Add experience</button>
        </div>
    )
}

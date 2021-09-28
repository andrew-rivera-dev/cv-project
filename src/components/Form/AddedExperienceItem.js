import React from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'

export default function AddedExperienceItem(props) {
    const { expid, handleExperienceChange, handleDeleteExperience } = props;

    return (
        <div>
            <DefaultExperienceItem expid={expid} handleExperienceChange={handleExperienceChange} />
            <button className="delete-experience-button" type="button" onClick={() => handleDeleteExperience(expid)}>
                Delete experience
            </button>
        </div>
    )
}

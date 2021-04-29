import React, { Component } from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'

export default class AddedExperienceItem extends Component {
    render() {
        const { expid, handleExperienceChange, handleDeleteExperience } = this.props;

        return (
            <div>
                <DefaultExperienceItem expid={expid} handleExperienceChange={handleExperienceChange} />
                <button className="delete-experience-button" type="button" onClick={() => handleDeleteExperience(expid)}>
                    Delete experience
                </button>
            </div>
        )
    }
}

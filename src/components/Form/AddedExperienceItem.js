import React, { Component } from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'

export default class AddedExperienceItem extends Component {
    render() {
        const { expid, handleExperienceChange } = this.props;

        return (
            <div>
                <DefaultExperienceItem expid={expid} handleExperienceChange={handleExperienceChange} />
                <button className="delete-experience-button" type="button">
                    Delete experience
                </button>
            </div>
        )
    }
}

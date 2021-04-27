import React, { Component } from 'react'
import DefaultExperienceItem from './DefaultExperienceItem'

export default class AddedExperienceItem extends Component {
    render() {
        const type = this.props.type;
        const handleStaticChange = this.props.handleStaticChange;
        const handleExperienceChange = this.props.handleExperienceChange;

        return (
            <div>
                <DefaultExperienceItem type={type} handleStaticChange={handleStaticChange} handleExperienceChange={handleExperienceChange} />
                <button className="delete-experience-button" type="button">
                    Delete experience
                </button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import StateSelector from '../Utils/StateSelector'

export default class FormExperienceItem extends Component {
    render() {
        const handleStaticChange = this.props.handleStaticChange;
        const handleExperienceChange = this.props.handleExperienceChange;

        return (
            <div>
                <input
                    id="defaultExperience"
                    name="companyName"
                    placeholder="Company name"
                    onChange={handleExperienceChange}
                />
                <input
                    name="companyCity"
                    placeholder="Company city"
                />
                <StateSelector
                    name="companyState"
                    handleStaticChange={handleStaticChange}
                />
                <input
                    name="startDate"
                    type="date"
                />
                <input
                    name="endDate"
                    type="date"
                />
                <input
                    name="jobTitle"
                    placeholder="Job title"
                />
                <textarea
                    name="jobResponsibilities"
                    placeholder="Job responsibilities"
                />

            </div>
        )
    }
}

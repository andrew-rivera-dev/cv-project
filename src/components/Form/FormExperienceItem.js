import React, { Component } from 'react'
import StateSelector from '../Utils/StateSelector'

export default class FormExperienceItem extends Component {
    onDateFocus(e) {
        e.currentTarget.type = "date";
    }

    onDateBlur(e) {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder= e.currentTarget.name.includes("start") ? "Job start date": "Job end date";
    }
    
    render() {
        const handleStaticChange = this.props.handleStaticChange;
        const handleExperienceChange = this.props.handleExperienceChange;

        return (
            <div>
                <input
                    id="defaultExperience"
                    name="companyName"
                    onChange={handleExperienceChange}
                    placeholder="Company name"
                />
                <input
                    id="defaultExperience"
                    name="companyCity"
                    onChange={handleExperienceChange}
                    placeholder="Company city"
                />
                <StateSelector
                    id="defaultExperience"
                    name="companyState"
                    handleStaticChange={handleStaticChange}
                />
                <input
                    id="defaultExperience"
                    name="experienceDateStart"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={handleExperienceChange}
                    placeholder="Job start date"
                />
                <input
                    id="defaultExperience"
                    name="experienceDateEnd"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={handleExperienceChange}
                    placeholder="Job end date"
                />
                <input
                    id="defaultExperience"
                    name="jobTitle"
                    onChange={handleExperienceChange}
                    placeholder="Job title"
                />
                <textarea
                    id="defaultExperience"
                    name="jobResponsibilities"
                    onChange={handleExperienceChange}
                    placeholder="Job responsibilities"
                />

            </div>
        )
    }
}

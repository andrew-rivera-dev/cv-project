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
        const id = this.props.id;
        const handleStaticChange = this.props.handleStaticChange;
        const handleExperienceChange = this.props.handleExperienceChange;

        return (
            <div className="form-experience-item">
                <input
                    id={id}
                    name="companyName"
                    onChange={handleExperienceChange}
                    placeholder="Company name"
                />
                <input
                    id={id}
                    name="companyCity"
                    onChange={handleExperienceChange}
                    placeholder="Company city"
                />
                <StateSelector
                    id={id}
                    name="companyState"
                    handleStaticChange={handleStaticChange}
                />
                <input
                    id={id}
                    name="experienceDateStart"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={handleExperienceChange}
                    placeholder="Job start date"
                />
                <input
                    id={id}
                    name="experienceDateEnd"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={handleExperienceChange}
                    placeholder="Job end date"
                />
                <input
                    id={id}
                    name="jobTitle"
                    onChange={handleExperienceChange}
                    placeholder="Job title"
                />
                <textarea
                    id={id}
                    name="jobResponsibilities"
                    onChange={handleExperienceChange}
                    placeholder="Job responsibilities"
                />
                <button className="delete-experience-button" type="button">
                    Delete experience
                </button>
            </div>
        )
    }
}

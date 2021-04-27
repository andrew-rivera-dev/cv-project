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
        const { handleExperienceChange, type } = this.props;

        return (
            <div className="form-experience-item">
                <input
                    name="companyName"
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Company name"
                />
                <input
                    name="companyCity"
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Company city"
                />
                <StateSelector
                    name="companyState"
                    handleChange={handleExperienceChange}
                    type={type}
                />
                <input
                    name="experienceDateStart"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Job start date"
                />
                <input
                    name="experienceDateEnd"
                    onBlur={this.onDateBlur}
                    onFocus={this.onDateFocus}
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Job end date"
                />
                <input
                    name="jobTitle"
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Job title"
                />
                <textarea
                    name="jobResponsibilities"
                    onChange={(e) => handleExperienceChange(e, type)}
                    placeholder="Job responsibilities"
                />
            </div>
        )
    }
}

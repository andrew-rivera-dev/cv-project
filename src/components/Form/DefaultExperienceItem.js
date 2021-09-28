import React from 'react'
import StateSelector from '../Utils/StateSelector'

export default function FormExperienceItem(props) {
    function onDateFocus(e) {
        e.currentTarget.type = "date";
    }

    function onDateBlur(e) {
        e.currentTarget.type = "text";
        e.currentTarget.placeholder= e.currentTarget.name.includes("start") ? "Job start date": "Job end date";
    }
    
    const { handleExperienceChange, expid } = props;

    return (
        <div className="form-experience-item">
            <input
                name="companyName"
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Company name"
            />
            <input
                name="companyCity"
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Company city"
            />
            <StateSelector
                name="companyState"
                handleChange={handleExperienceChange}
                expid={expid}
            />
            <input
                name="experienceDateStart"
                onBlur={onDateBlur}
                onFocus={onDateFocus}
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Job start date"
            />
            <input
                name="experienceDateEnd"
                onBlur={onDateBlur}
                onFocus={onDateFocus}
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Job end date"
            />
            <input
                name="jobTitle"
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Job title"
            />
            <textarea
                name="jobResponsibilities"
                onChange={(e) => handleExperienceChange(e, expid)}
                placeholder="Job responsibilities"
            />
        </div>
    )
}

import React, { Component } from 'react'
import StateSelector from './Utils/StateSelector'

export default class ExperienceItem extends Component {
    render() {
        const handleChange = this.props.handleChange;

        return (
            <div>
                <input
                    name="companyName"
                    placeholder="Company name"
                />
                <input
                    name="companyCity"
                    placeholder="Company city"
                />
                <StateSelector
                    name="companyState"
                    handlechange={handleChange}
                />
                <input
                    name="companyCity"
                    placeholder="Company city"
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

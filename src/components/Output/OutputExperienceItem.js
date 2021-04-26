import React, { Component } from 'react'

export default class OutputExperienceItem extends Component {
    render() {
        const { id, experience } = this.props;
        const current = experience[id];
        const {
            companyName,
            companyCity,
            companyState,
            experienceDateStart,
            experienceDateEnd,
            jobTitle,
            jobResponsibilities
        } = current;

        const jobResponsibilitiesSplit = jobResponsibilities.split('\n');

        const jobResponsibilitiesOutput = jobResponsibilitiesSplit.map(item => {
            return <li>{item}</li>;
        })

        return (
            <div id={id}>
                <div className="output-experience-company">{companyName}, {companyCity}, {companyState}</div>
                <div className="output-experience-date">{experienceDateStart}-{experienceDateEnd}</div>
                <div className="output-experience-job-title">{jobTitle}</div>
                <div>
                    <ul>
                        {jobResponsibilitiesOutput}
                    </ul>
                </div>
            </div>
        )
    }
}

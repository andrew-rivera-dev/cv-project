import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class OutputExperienceItem extends Component {
    render() {
        const { expid, experience } = this.props;
        const current = experience[expid];
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
            return <li key={uuidv4()}>{item}</li>;
        });

        return (
            <div>
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

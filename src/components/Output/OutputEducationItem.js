import React, { Component } from 'react'

export default class OutputEducationItem extends Component {
    render() {
        const {
            schoolName,
            schoolCity,
            schoolState,
            degree,
            major,
            graduation
        } = this.props.data.education;
    
        return (
            <div id="output-education-container">
                <h4 id="output-education-label">EDUCATION</h4>
                <div id="output-education-school">{schoolName}, {schoolCity} {schoolState}</div>
                <div id="output-education-date">{graduation}</div>
                <div id="output-education-degree">{degree}, {major}</div>
            </div>
        )
    }
}

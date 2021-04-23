import React, { Component } from 'react'
import FormExperienceItem from './FormExperienceItem'

export default class Experience extends Component {
    render() {
        return (
            <div className="form-component">
                <h2>Experience</h2>
                <FormExperienceItem handleExperienceChange={this.props.handleExperienceChange} /> 
            </div>
        )
    }
}

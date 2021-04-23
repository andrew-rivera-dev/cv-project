import React, { Component } from 'react'
import ExperienceFormItem from './ExperienceFormItem'

export default class Experience extends Component {
    render() {
        return (
            <div className="form-component">
                <h2>Experience</h2>
                <ExperienceFormItem handleExperienceChange={this.props.handleExperienceChange} /> 
            </div>
        )
    }
}

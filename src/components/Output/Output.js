import React, { Component } from 'react'
import OutputHeaderItem from './OutputHeaderItem'
import OutputEducationItem from './OutputEducationItem'
import OutputExperienceItem from './OutputExperienceItem'

export default class Output extends Component {
    render() {
        return ( 
            <div className="main output">
                <OutputHeaderItem data={this.props.data} />
                <OutputEducationItem data={this.props.data} />
                <h4 className="output-section-label">EXPERIENCE</h4>
                <OutputExperienceItem id="defaultExperience" experience={this.props.data.experience} />
            </div>
        )
    }    
}

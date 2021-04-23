import React, { Component } from 'react'
import OutputHeaderItem from './OutputHeaderItem'
import OutputEducationItem from './OutputEducationItem'

export default class Output extends Component {
    render() {
        const experience = this.props.data.experience;

        return ( 
            <div className="main output">
                <OutputHeaderItem data={this.props.data} />
                <OutputEducationItem data={this.props.data} />
                <div id="defaultExperience">{experience.defaultExperience.companyName}</div>
            </div>
        )
    }    
}

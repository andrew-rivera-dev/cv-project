import React, { Component } from 'react'
import OutputHeaderItem from './OutputHeaderItem'
import OutputEducationItem from './OutputEducationItem'
import OutputExperienceItem from './OutputExperienceItem'
import { v4 as uuidv4 } from 'uuid';

export default class Output extends Component {
    render() {
        const experience = this.props.data.experience;

        const addedExperienceElements = Object.keys(experience).map(item => {
            return <OutputExperienceItem key={uuidv4()} id={item} experience={experience} />
        })

        return ( 
            <div className="main output">
                <OutputHeaderItem data={this.props.data} />
                <OutputEducationItem data={this.props.data} />
                <h4 className="output-section-label">EXPERIENCE</h4>
                <div>
                    {addedExperienceElements}
                </div>
            </div>
        )
    }    
}

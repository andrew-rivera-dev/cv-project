import React, { Component } from 'react'
import StateSelector from './Utils/StateSelector'

export default class Education extends Component {
    render() {
        const handleChange = this.props.handleChange;
        const type = this.props.type;

        return (
            <div className="form-component">
                <h2>Education</h2>
                <input
                    name="schoolName"
                    placeholder="School name" 
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="schoolCity"
                    placeholder="School city" 
                    onChange={(e) => handleChange(e, type)}
                />
                <StateSelector
                    name="schoolState"
                    handleChange={handleChange}
                    type='education'
                />
                <input
                    name="degree"
                    placeholder="Degree" 
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="major"
                    placeholder="Major" 
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="graduation"
                    placeholder="Graduation" 
                    onChange={(e) => handleChange(e, type)}
                />
            </div>
        )
    }
}

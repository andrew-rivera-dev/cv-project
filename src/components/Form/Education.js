import React from 'react'
import StateSelector from '../Utils/StateSelector'

export default function Education(props) {
    const handleStaticChange = props.handleStaticChange;
    const type = props.type;

    return (
        <div className="form-component">
            <h2>Education</h2>
            <input
                name="schoolName"
                placeholder="School name" 
                onChange={(e) => handleStaticChange(e, type)}
            />
            <input
                name="schoolCity"
                placeholder="School city" 
                onChange={(e) => handleStaticChange(e, type)}
            />
            <StateSelector
                name="schoolState"
                handleChange={handleStaticChange}
                expid='education'
            />
            <input
                name="degree"
                placeholder="Degree" 
                onChange={(e) => handleStaticChange(e, type)}
            />
            <input
                name="major"
                placeholder="Major" 
                onChange={(e) => handleStaticChange(e, type)}
            />
            <input
                name="graduation"
                placeholder="Graduation" 
                onChange={(e) => handleStaticChange(e, type)}
            />
        </div>
    )
}

import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        const {
            firstName,
            lastName,
            address,
            city,
            usState,
            zip,
            phone,
            email 
        } = this.props.data.personal;

        const {
            schoolName,
            schoolCity,
            schoolState,
            degree,
            major,
            graduation
        } = this.props.data.education;

        return ( 
            <div className="main output">
                <div>{firstName} {lastName}</div>
                <div>{address} | {city}, {usState} {zip} | {phone} | {email}</div>
                <div>{schoolName}, {schoolCity} {schoolState} {graduation}</div>
                <div>{degree}, {major}</div>
            </div>
        )
    }    
}

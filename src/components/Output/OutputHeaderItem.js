import React, { Component } from 'react'

export default class OutputHeaderItem extends Component {
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

        
        
        return (
            <div id="output-header-container">
                <div id="output-header-name">{firstName} {lastName}</div>
                <div>{address} | {city}, {usState} {zip} | {phone} | {email}</div>
            </div>
        )
    }
}

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
        } = this.props.data;

        return ( 
            <div className="main">
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{address}</div>
                <div>{city}</div>
                <div>{usState}</div>
                <div>{zip}</div>
                <div>{phone}</div>
                <div>{email}</div>
            </div>
        )
    }    
}

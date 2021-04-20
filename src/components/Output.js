import React, { Component } from 'react'

class Output extends Component {
    render() {
        const { firstName, lastName, email } = this.props.data;

        return ( 
            <div className="main">
                <div>{firstName}</div>
                <div>{lastName}</div>
                <div>{email}</div>
            </div>
        )
    }    
}

export default Output
import React, { Component } from 'react'
import StateSelector from "../Utils/StateSelector"

export default class Personal extends Component {
    render() {
        const handleStaticChange = this.props.handleStaticChange;
        const type = this.props.type;

        return (
            <div className="form-component">
                <h2>Personal Information</h2>
                <input 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <input 
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <input
                    name="address"
                    placeholder="Address"
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <input
                    name="city"
                    placeholder="City"
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <StateSelector
                    name="usState"
                    handleStaticChange={handleStaticChange}
                    type='personal'
                />
                <input
                    name="zip"
                    placeholder="ZIP Code"
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <input
                    name="phone"
                    placeholder="Phone number"
                    onChange={(e) => handleStaticChange(e, type)}
                />
                <input 
                    name="email"
                    placeholder="Email" 
                    onChange={(e) => handleStaticChange(e, type)}
                />
            </div>
        )
    }
}

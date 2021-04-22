import React, { Component } from 'react'
import StateSelector from "./Utils/StateSelector"

export default class Personal extends Component {
    render() {
        const handleChange = this.props.handleChange;
        const type = this.props.type;

        return (
            <div className="form-component">
                <h2>Personal Information</h2>
                <input 
                    name="firstName"
                    placeholder="First Name" 
                    onChange={(e) => handleChange(e, type)}
                />
                <input 
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="address"
                    placeholder="Address"
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="city"
                    placeholder="City"
                    onChange={(e) => handleChange(e, type)}
                />
                <StateSelector
                    name="usState"
                    handleChange={handleChange}
                    type='personal'
                />
                <input
                    name="zip"
                    placeholder="ZIP Code"
                    onChange={(e) => handleChange(e, type)}
                />
                <input
                    name="phone"
                    placeholder="Phone number"
                    onChange={(e) => handleChange(e, type)}
                />
                <input 
                    name="email"
                    placeholder="Email" 
                    onChange={(e) => handleChange(e, type)}
                />
            </div>
        )
    }
}

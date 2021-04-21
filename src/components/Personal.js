import React, { Component } from 'react'
import StateSelector from "./Utils/StateSelector"

export default class Personal extends Component {
    render() {
        const {
            firstName,
            lastName,
            address,
            city,
            usState,
            zip,
            phone,
            email,
            handleChange
        } = this.props;

        return (
            <div className="form-component">
                <input 
                    name="firstName"
                    value={firstName} 
                    placeholder="First Name" 
                    onChange={handleChange}
                />
                <input 
                    name="lastName"
                    value={lastName} 
                    placeholder="Last Name" 
                    onChange={handleChange}
                />
                <input
                    name="address"
                    value={address}
                    placeholder="Address"
                    onChange={handleChange}
                />
                <input
                    name="city"
                    value={city}
                    placeholder="City"
                    onChange={handleChange}
                />
                <StateSelector
                    name="usState"
                    value={usState} 
                    handleChange={handleChange}
                />
                <input
                    name="zip"
                    value={zip}
                    placeholder="ZIP Code"
                    onChange={handleChange}
                />
                <input
                    name="phone"
                    value={phone}
                    placeholder="Phone number"
                    onChange={handleChange}
                />
                <input 
                    name="email"
                    value={email} 
                    placeholder="Email" 
                    onChange={handleChange}
                />
            </div>
        )
    }
}

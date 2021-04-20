import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.props.handleFormChange(e);
    }

    render() {
        const { firstName, lastName, email} = this.props;
        return (
            <div className="main form">
                <input 
                    name="firstName"
                    value={firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <input 
                    name="lastName"
                    value={lastName} 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />
                <input 
                    name="email"
                    value={email} 
                    placeholder="Email" 
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Form